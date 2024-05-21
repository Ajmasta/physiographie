import { useState, useEffect, useRef, useMemo } from "react";
import tableData from "../../i18n/fr/protocols/epaule/epaule.json";
import Generalites from "../../components/protocols/Generalites";
import ListTextSection from "../../components/protocols/ListTextSection";
import ParagraphTextSection from "../../components/protocols/ParagraphTextSection";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import VueSection from "../../components/protocols/VueSection";

const INVIEW_TRESHOLD = 0.2;

const Protocol = () => {
  const [activeSection, setActiveSection] = useState("");
  const [activeSubsection, setActiveSubsection] = useState([]);

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const getSubsections = (key) => {
    if (tableData[key]?.content?.[0]?.subtitle) {
      const subtitles = tableData[key].content.map(
        (section) => section.subtitle
      );
      return subtitles;
    }
  };

  const { ref: refTechnique, inView: inViewTechnique } = useInView({
    threshold: INVIEW_TRESHOLD,
    triggerOnce: false,
  });
  const { ref: refAnatomy, inView: inViewAnatomy } = useInView({
    threshold: INVIEW_TRESHOLD,
    triggerOnce: false,
  });
  const { ref: refGeneralites, inView: inViewGeneralites } = useInView({
    threshold: INVIEW_TRESHOLD,
    triggerOnce: false,
  });
  const { ref: refValeursNormatives, inView: inViewValeursNormatives } =
    useInView({
      threshold: INVIEW_TRESHOLD,
      triggerOnce: false,
    });

  const sectionEntries = useMemo(
    () => [
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
      {
        key: "generalites",
        inView: inViewGeneralites,
        subsections: getSubsections("generalites"),
      },
      {
        key: "valeursNormatives",
        inView: inViewValeursNormatives,
        subsections: getSubsections("valeursNormatives"),
      },
    ],
    [inViewTechnique, inViewAnatomy, inViewGeneralites, inViewValeursNormatives]
  );

  useEffect(() => {
    const mostVisibleSection = sectionEntries.reduce(
      (prev, current) => (current.inView ? current : prev),
      {}
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
      <div
        className="sticky top-0 left-0 z-20 self-start"
        style={{ width: "20%", top: "200px" }}
      >
        <ul>
          {menuContent.map((section, index) => (
            <>
              <li
                key={index}
                style={{
                  fontWeight:
                    activeSection === sectionEntries[index].key
                      ? "bold"
                      : "normal",
                }}
              >
                <a href={`#${section.key}`}> {section.sectionTitle}</a>
              </li>
              <CSSTransition
                nodeRef={nodeRef}
                in={activeSection === sectionEntries[index].key}
                timeout={0}
                classNames="subsection"
                unmountOnExit
              >
                <div ref={nodeRef}>
                  <ul className="ml-4 list-none">
                    {activeSubsection &&
                      activeSection === sectionEntries[index].key &&
                      activeSubsection.map((subsection, idx) => (
                        <li key={idx}>{subsection}</li>
                      ))}
                  </ul>
                </div>
              </CSSTransition>
            </>
          ))}
        </ul>
      </div>

      <div style={{ width: "60%", maxWidth: "1200px" }}>
        <div ref={refTechnique} className="relative">
          <span id="technique" className="absolute" style={{ top: "-110px" }} />
          <ListTextSection
            content={tableData.technique.content}
            sectionTitle={tableData.technique.sectionTitle}
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
        <div ref={refGeneralites}>
          <Generalites rows={tableData.rows} />
          <br /> <br /> <br /> <br /> <br />
        </div>
        <div ref={refValeursNormatives}>
          <ParagraphTextSection
            content={tableData.descriptionAnatomique.content[0].text}
            images={tableData.images.anatomie}
          />
        </div>
        <VueSection vue={tableData.vueTransversale} />
      </div>
    </div>
  );
};

export default Protocol;
