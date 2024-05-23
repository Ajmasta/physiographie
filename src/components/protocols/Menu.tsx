import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface MenuProps {
  menuContent: { sectionTitle: string; key: string }[];
  activeSection: string;
  activeSubsection: string[];
  sectionEntries: [];
}

const Menu = ({
  menuContent,
  activeSection,
  activeSubsection,
  sectionEntries,
}: MenuProps) => {
  const nodeRef = useRef(null);
  return (
    <div
      className="sticky top-0 left-0 z-20 self-start"
      style={{ width: "20%", top: "200px" }}
    >
      <ul>
        {menuContent.map((section, index) => (
          <li
            key={index}
            style={{
              fontWeight: activeSection === section.key ? "bold" : "normal",
            }}
          >
            <a href={`#${section.key}`}>{section.sectionTitle}</a>
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
                      <a href={`#${subsection}`}>
                        <li key={idx} style={{ fontWeight: "normal" }}>
                          {subsection}
                        </li>
                      </a>
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
