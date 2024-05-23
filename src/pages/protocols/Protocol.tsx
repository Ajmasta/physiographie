import { useState, useEffect, useMemo, useRef } from "react";
import tableData from "../../i18n/fr/protocols/epaule/bicepsBrachial.json";
import Generalites from "../../components/protocols/Generalites";
import ListTextSection from "../../components/protocols/ListTextSection";
import ParagraphTextSection from "../../components/protocols/ParagraphTextSection";
import { useInView } from "react-intersection-observer";
import { Vue } from "../../components/protocols/VueSection";
import Menu from "../../components/protocols/Menu";

const INVIEW_THRESHOLD = 0.2;

const Protocol = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubsection, setActiveSubsection] = useState([]);

  const getSubsections = (key: string): string[] | undefined => {
    let subtitlesContent = [];
    let subtitlesVues = [];
    if (tableData[key]?.content?.[0]?.subtitle) {
      subtitlesContent = tableData[key].content.map(
        (section: any) => section.subtitle
      );
    }
    if (tableData[key]?.vues) {
      subtitlesVues = tableData[key].vues.map((vue: Vue) => vue.title);
    }

    return [...subtitlesContent, ...subtitlesVues];
  };

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
  const { ref: refValeursNormatives, inView: inViewValeursNormatives } =
    useInView({
      threshold: INVIEW_THRESHOLD,
      triggerOnce: false,
    });

  const sectionEntries = useMemo(
    () => [
      {
        key: "generalites",
        inView: inViewGeneralites,
        subsections: getSubsections("generalites"),
      },
      {
        key: "technique",
        inView: inViewTechnique,
        subsections: getSubsections("technique"),
      },
      {
        key: "descriptionAnatomique",
        inView: inViewAnatomy,
        subsections: getSubsections("descriptionAnatomique"),
      },
    ],
    [inViewTechnique, inViewAnatomy, inViewGeneralites]
  );

  useEffect(() => {
    const mostVisibleSection = sectionEntries.reduce(
      (prev, current) => (current.inView ? current : prev),
      { key: "", subsections: [] }
    );

    if (mostVisibleSection.key) {
      setActiveSection(mostVisibleSection.key);
      setActiveSubsection(mostVisibleSection.subsections);
    }
  }, [
    inViewTechnique,
    inViewAnatomy,
    inViewGeneralites,
    inViewValeursNormatives,
    sectionEntries,
  ]);

  const getMenuContent = () => {
    return sectionEntries.map(({ key }) => {
      return { sectionTitle: tableData[key].sectionTitle, key };
    });
  };

  const menuContent = getMenuContent();

  return (
    <div className="flex">
      <Menu
        menuContent={menuContent}
        activeSection={activeSection}
        activeSubsection={activeSubsection}
        sectionEntries={sectionEntries}
      />

      <div style={{ width: "60%", maxWidth: "1200px" }}>
        <div ref={refGeneralites} className="relative">
          <span
            id="generalites"
            className="absolute"
            style={{ top: "-110px" }}
          />
          <Generalites
            rows={tableData.generalites.rangees}
            sectionTitle={tableData.generalites.sectionTitle}
          />
          <Generalites
            rows={tableData.valeursNormatives.rangees}
            sectionTitle={tableData.valeursNormatives.sectionTitle}
          />
        </div>

        <div ref={refTechnique} className="relative">
          <span id="technique" className="absolute" style={{ top: "-110px" }} />
          <ListTextSection
            content={tableData.technique.content}
            sectionTitle={tableData.technique.sectionTitle}
            vues={tableData.technique.vues}
          />
        </div>

        <div ref={refAnatomy} className="relative">
          <span
            id="descriptionAnatomique"
            className="absolute"
            style={{ top: "-110px" }}
          />
          <ParagraphTextSection
            content={tableData.descriptionAnatomique.content[0].text}
            images={tableData.images.anatomie}
          />
        </div>
      </div>
    </div>
  );
};

export default Protocol;
