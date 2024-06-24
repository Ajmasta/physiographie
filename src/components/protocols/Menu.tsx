import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { SectionEntry } from "../../pages/protocols/Protocol";
import { ProtocolKeys } from "../../interfaces/protocol";
import { Link } from "react-router-dom";

interface MenuProps {
  menuContent: { sectionTitle?: string; key?: ProtocolKeys }[];
  activeSection: string;
  activeSubsection: string[];
  sectionEntries: SectionEntry[];
}

const Menu = ({
  menuContent,
  activeSection,
  activeSubsection,
  sectionEntries,
}: MenuProps) => {
  const nodeRef = useRef(null);
  const removeAnchorTags = (input: string) => {
    return input?.replace(/<a[^>]*>.*?<\/a>/gi, "");
  };

  return (
    <div
      className="sticky top-0 z-20 self-start hidden left-12 md:block"
      style={{ width: "20%", top: "200px" }}
    >
      <ul className="list-none">
        {menuContent.map((section, index) => (
          <li
            key={index}
            style={{
              fontWeight: activeSection === section.key ? "900" : "normal",
            }}
            className={
              activeSection === section.key
                ? "text-xl text-physioBlue"
                : "text-xl"
            }
          >
            <div className="flex flex-row items-center mb-2">
              <div
                className={
                  activeSection === section.key
                    ? "w-1 h-7 mr-2 bg-physioBlue transition-all ease-in duration-600"
                    : "w-1  h-7 mr-2 bg-slate-200 ease-in duration-600"
                }
              />
              <Link to={`#${section.key}`}>{section.sectionTitle}</Link>
            </div>
            <CSSTransition
              nodeRef={nodeRef}
              in={activeSection === sectionEntries[index].key}
              timeout={0}
              classNames="subsection"
              unmountOnExit
            >
              <div ref={nodeRef}>
                {activeSection === section.key && (
                  <ul className="ml-4 list-none">
                    {activeSubsection.map((subsection, idx) => (
                      <Link to={`#${subsection}`}>
                        <li
                          key={idx}
                          className="text-base font-normal text-black"
                        >
                          {removeAnchorTags(subsection)}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </CSSTransition>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
