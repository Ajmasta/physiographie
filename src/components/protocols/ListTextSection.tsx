import React from "react";
import TextGenerator from "../TextGenerator";
import VueSection, { Vue } from "./VueSection";

interface Content {
  subtitle: string;
  text: (string | string[])[];
}
type Props = {
  content: Content[];
  sectionTitle: string;
  vues: Vue[];
};

const ListTextSection = ({ content, sectionTitle, vues }: Props) => {
  return (
    <div tabIndex={0} className="bg-white collapse collapse-arrow">
      <input type="checkbox" defaultChecked={true} />
      <div className="collapse-title">
        <TextGenerator classes="text-xl font-medium" text={sectionTitle} />
      </div>
      <div className="collapse-content">
        {content.map((item) => (
          <div tabIndex={0} className="bg-white collapse collapse-arrow">
            <input type="checkbox" defaultChecked={true} />
            <div className="relative collapse-title">
              <span
                id={item.subtitle}
                className="absolute"
                style={{ top: "-110px" }}
              />
              <TextGenerator
                classes="text-xl font-medium"
                text={item.subtitle}
              />
            </div>
            <div className="collapse-content">
              <ul className="ml-6 list-disc">
                {item.text.map((element, index) => {
                  return Array.isArray(element) ? (
                    element.map((item, idx) => (
                      <li key={idx} className="ml-6 list-item">
                        <TextGenerator span text={item} />
                      </li>
                    ))
                  ) : (
                    <li key={index} className="list-item">
                      <TextGenerator span text={element} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
        {vues.map((vue) => (
          <VueSection vue={vue} />
        ))}
      </div>
    </div>
  );
};

export default ListTextSection;
