import { useState, useEffect, useMemo } from "react";
import Table from "../../components/protocols/Table";
import ListTextSection from "../../components/protocols/ListTextSection";
import ParagraphTextSection from "../../components/protocols/ParagraphTextSection";
import { useInView } from "react-intersection-observer";
import Menu from "../../components/protocols/Menu";
import LinkList from "../../components/protocols/LinkList";
import ReferenceList from "../../components/protocols/ReferenceList";
import Collapse from "../../components/Collapse";
import {
  ProtocolSections,
  ProtocolData,
  Technique,
  ProtocolKeys,
} from "../../interfaces/protocol";
import { ScrollRestoration } from "react-router-dom";

const INVIEW_THRESHOLD = 0.1;

interface ContentItem {
  subtitle?: string;
}

// Type guard functions

function hasContent(
  section: ProtocolSections
): section is ProtocolSections & { content: ContentItem[] } {
  return Array.isArray(section.content);
}

function hasVues(section: ProtocolSections): section is Technique {
  return "vues" in section;
}

function hasApplicationDynamique(
  section: ProtocolSections
): section is Technique {
  return "applicationDynamique" in section;
}

export interface SectionEntry {
  key?: ProtocolKeys;
  inView: boolean;
  subsections: string[];
}

interface Props {
  protocolData: ProtocolData;
}
const Protocol = ({ protocolData }: Props) => {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubsection, setActiveSubsection] = useState<string[]>([]);

  const getSubsections = useMemo(() => {
    return (key: ProtocolKeys) => {
      let subtitlesContent: string[] = [];
      let subtitlesVues: string[] = [];
      let subtitleAppDynamic;

      const section: ProtocolSections = protocolData[key];

      if (section && hasContent(section)) {
        if ("content" in section) {
          subtitlesContent = (
            section as { content: ContentItem[] }
          ).content.map((item: ContentItem) => item.subtitle || "");
        }
      }
      if (section && hasVues(section)) {
        subtitlesVues = section.vues.map((vue) => vue.title);
      }

      if (section && hasApplicationDynamique(section)) {
        subtitleAppDynamic = section.applicationDynamique?.title;
        return [...subtitlesContent, ...subtitlesVues, subtitleAppDynamic];
      }

      return [...subtitlesContent, ...subtitlesVues];
    };
  }, [protocolData]);

  const { ref: refTechnique, inView: inViewTechnique } = useInView({
    threshold: INVIEW_THRESHOLD,
    triggerOnce: false,
  });
  const { ref: refAnatomy, inView: inViewAnatomy } = useInView({
    threshold: INVIEW_THRESHOLD,
    triggerOnce: false,
  });
  const { ref: refGeneralites, inView: inViewGeneralites } = useInView({
    threshold: INVIEW_THRESHOLD,
    triggerOnce: false,
  });
  const { ref: refPertinence, inView: inViewPertinence } = useInView({
    threshold: INVIEW_THRESHOLD,
    triggerOnce: false,
  });
  const { ref: refLiensEtRefs, inView: inViewLiensEtRefs } = useInView({
    threshold: INVIEW_THRESHOLD,
    triggerOnce: false,
  });

  const sectionEntries: SectionEntry[] = useMemo(
    () => [
      {
        key: ProtocolKeys.NormesEtGeneralites,
        inView: inViewGeneralites,
        subsections: getSubsections(ProtocolKeys.NormesEtGeneralites),
      },
      {
        key: ProtocolKeys.Technique,
        inView: inViewTechnique,
        subsections: getSubsections(ProtocolKeys.Technique),
      },
      {
        key: ProtocolKeys.DescriptionAnatomique,
        inView: inViewAnatomy,
        subsections: getSubsections(ProtocolKeys.DescriptionAnatomique),
      },
      {
        key: ProtocolKeys.PertinenceClinique,
        inView: inViewPertinence,
        subsections: getSubsections(ProtocolKeys.PertinenceClinique),
      },
      {
        key: ProtocolKeys.LiensEtRefs,
        inView: inViewLiensEtRefs,
        subsections: getSubsections(ProtocolKeys.LiensEtRefs),
      },
    ],
    [
      inViewTechnique,
      inViewAnatomy,
      inViewGeneralites,
      inViewPertinence,
      inViewLiensEtRefs,
      getSubsections,
    ]
  );

  useEffect(() => {
    const mostVisibleSection = sectionEntries.reduce(
      (prev, current) => (current.inView ? current : prev),
      { key: undefined, subsections: [], inView: false }
    );

    if (mostVisibleSection.key) {
      setActiveSection(mostVisibleSection.key);
      setActiveSubsection(mostVisibleSection.subsections);
    }
  }, [
    inViewTechnique,
    inViewAnatomy,
    inViewGeneralites,
    inViewPertinence,
    sectionEntries,
  ]);

  const getMenuContent = () => {
    return sectionEntries.map(({ key }) => {
      return { sectionTitle: key && protocolData[key].sectionTitle, key };
    });
  };

  const menuContent = getMenuContent();

  return (
    <div className="flex w-full">
      <Menu
        menuContent={menuContent}
        activeSection={activeSection}
        activeSubsection={activeSubsection}
        sectionEntries={sectionEntries}
      />

      <div className="max-w-full pl-4 md:w-[70%] md:max-w-[1200px]">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="p-4 text-4xl font-bold">{protocolData.title}</h1>
          <h2 className="text-2xl text-slate-400">{protocolData.latinName}</h2>
        </div>
        <div ref={refGeneralites} className="relative">
          <span
            id="normesEtGeneralites"
            className="absolute"
            style={{ top: "-110px" }}
          />
          <Collapse title={protocolData.normesEtGeneralites.sectionTitle}>
            <Table
              rows={protocolData.normesEtGeneralites.valeursNormatives.rangees}
              sectionTitle={
                protocolData.normesEtGeneralites.valeursNormatives.sectionTitle
              }
              text={protocolData.normesEtGeneralites.valeursNormatives.text}
            />
            {protocolData.normesEtGeneralites.extraTable && (
              <Table
                rows={protocolData.normesEtGeneralites.extraTable.rangees}
                sectionTitle={
                  protocolData.normesEtGeneralites.extraTable.sectionTitle
                }
                text={protocolData.normesEtGeneralites.extraTable.text}
              />
            )}
            <Table
              rows={protocolData.normesEtGeneralites.generalites.rangees}
              sectionTitle={
                protocolData.normesEtGeneralites.generalites.sectionTitle
              }
              text={protocolData.normesEtGeneralites.generalites.text}
            />
          </Collapse>
        </div>

        <div ref={refTechnique} className="relative">
          <span id="technique" className="absolute" style={{ top: "-110px" }} />
          <Collapse title={protocolData.technique.sectionTitle}>
            <ListTextSection
              content={protocolData.technique.content}
              vues={protocolData.technique.vues}
              applicationDynamique={protocolData.technique.applicationDynamique}
            />
          </Collapse>
        </div>

        <div ref={refAnatomy} className="relative">
          <span
            id="descriptionAnatomique"
            className="absolute"
            style={{ top: "-110px" }}
          />
          <Collapse title={protocolData.descriptionAnatomique.sectionTitle}>
            <ParagraphTextSection
              content={protocolData.descriptionAnatomique.content[0].text}
              images={protocolData.descriptionAnatomique.images}
              source={protocolData.descriptionAnatomique.source}
              table={protocolData.descriptionAnatomique.table}
            />
          </Collapse>
        </div>

        <div ref={refPertinence} className="relative">
          <span
            id="pertinenceClinique"
            className="absolute"
            style={{ top: "-140px" }}
          />
          <Collapse title={protocolData.pertinenceClinique.sectionTitle}>
            <ListTextSection
              content={protocolData.pertinenceClinique.content}
            />
          </Collapse>
        </div>
        <div ref={refLiensEtRefs} className="relative">
          <span
            id="liensEtRefs"
            className="absolute"
            style={{ top: "-110px" }}
          />
          <Collapse title={protocolData.liensEtRefs.sectionTitle}>
            <LinkList
              content={protocolData.liensEtRefs.voirAussi.content}
              sectionTitle={protocolData.liensEtRefs.voirAussi.sectionTitle}
            />
            <ReferenceList
              content={protocolData.liensEtRefs.references.content}
              sectionTitle={protocolData.liensEtRefs.references.sectionTitle}
            />
          </Collapse>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Protocol;
