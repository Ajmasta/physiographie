import React from "react";

type Props = {
  subtitle: string;
  text: (string | string[])[];
};

const ListTextSection = ({ content, sectionTitle }: { content: Props[] }) => {
  return (
    <div
      tabIndex={0}
      className="border collapse collapse-arrow border-base-300 bg-base-200"
    >
      <input type="checkbox" defaultChecked={true} />
      <div className="text-xl font-medium collapse-title">{sectionTitle}</div>
      <div className="collapse-content">
        {content.map((item: Props) => (
          <div
            tabIndex={0}
            className="border collapse collapse-arrow border-base-300 bg-base-200"
          >
            <input type="checkbox" defaultChecked={true} />
            <div className="text-xl font-medium collapse-title">
              {item.subtitle}
            </div>
            <div className="collapse-content">
              <ul className="ml-6 list-disc">
                {item.text.map((element, index) => {
                  return Array.isArray(element) ? (
                    element.map((item, idx) => (
                      <li key={idx} className="ml-6 list-item">
                        {item}
                      </li>
                    ))
                  ) : (
                    <li key={index} className="list-item">
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTextSection;
