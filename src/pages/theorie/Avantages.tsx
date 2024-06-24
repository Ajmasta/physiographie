import React from "react";
import avantages from "../../i18n/fr/theorie/avantages.json";
import TheorieParent from "../../components/theorie/TheorieParent";
import { textStyle } from "./PrincipePhysiques";
import Collapse from "../../components/Collapse";

const Avantages = () => {
  return (
    <TheorieParent title={avantages.title}>
      <Collapse title={avantages.sections.sectionOne.title}>
        <p className={textStyle}>{avantages.sections.sectionOne.text}</p>
      </Collapse>
      <Collapse title={avantages.sections.sectionTwo.title}>
        <Collapse
          subtitle
          title={avantages.sections.sectionTwo.subsections.subsectionOne.title}
        >
          <ol className="ml-8 list-decimal">
            {avantages.sections.sectionTwo.subsections.subsectionOne.text.map(
              (item) => {
                if (Array.isArray(item)) {
                  return (
                    <ul className="ml-8">
                      {item.map((subItem) => (
                        <li className={textStyle}>{subItem}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return <li className={textStyle}>{item}</li>;
                }
              }
            )}
          </ol>
        </Collapse>
        <Collapse
          subtitle
          title={avantages.sections.sectionTwo.subsections.subsectionTwo.title}
        >
          <ol className="ml-8 list-disc">
            {avantages.sections.sectionTwo.subsections.subsectionTwo.text.map(
              (item) => {
                if (Array.isArray(item)) {
                  return (
                    <ul className="ml-8">
                      {item.map((subItem) => (
                        <li className={textStyle}>{subItem}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return <li className={textStyle}>{item}</li>;
                }
              }
            )}
          </ol>
        </Collapse>
      </Collapse>
      <Collapse title={avantages.sections.sectionThree.title}>
        <Collapse
          subtitle
          title={
            avantages.sections.sectionThree.subsections.subsectionOne.title
          }
        >
          <ol className="ml-8 list-decimal">
            {avantages.sections.sectionThree.subsections.subsectionOne.text.map(
              (item) => {
                if (Array.isArray(item)) {
                  return (
                    <ul className="ml-8">
                      {item.map((subItem) => (
                        <li className={textStyle}>{subItem}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return <li className={textStyle}>{item}</li>;
                }
              }
            )}
          </ol>
        </Collapse>
        <Collapse
          subtitle
          title={
            avantages.sections.sectionThree.subsections.subsectionTwo.title
          }
        >
          <ol className="ml-8 list-disc">
            {avantages.sections.sectionThree.subsections.subsectionTwo.text.map(
              (item) => {
                if (Array.isArray(item)) {
                  return (
                    <ul className="ml-8">
                      {item.map((subItem) => (
                        <li className={textStyle}>{subItem}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return <li className={textStyle}>{item}</li>;
                }
              }
            )}
          </ol>
        </Collapse>
      </Collapse>
      <Collapse title={avantages.sectionFour.title}>
        <ol className="ml-8 list-disc">
          {avantages.sectionFour.text.map((item) => {
            if (Array.isArray(item)) {
              return (
                <ul className="ml-8">
                  {item.map((subItem) => (
                    <li className={textStyle}>{subItem}</li>
                  ))}
                </ul>
              );
            } else {
              return <li className={textStyle}>{item}</li>;
            }
          })}
        </ol>
      </Collapse>
    </TheorieParent>
  );
};

export default Avantages;
