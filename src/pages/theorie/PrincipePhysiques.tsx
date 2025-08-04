import React from "react";
import Collapse from "../../components/Collapse";
import TheorieParent from "../../components/theorie/TheorieParent";
import {
  useTheoryTranslation,
  TheoryData,
} from "../../hooks/useTheoryTranslation";

export const textStyle = "py-2 text-xl leading-8";

const PrincipePhysiques = () => {
  const { data, error } = useTheoryTranslation("principesPhysiques");

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const d = data as TheoryData;

  // Helper to safely get nested values
  const getValue = (obj: unknown, path: string): unknown => {
    return path.split(".").reduce((acc, part) => {
      if (acc && typeof acc === "object" && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return null;
    }, obj);
  };

  const renderText = (path: string) => {
    const text = getValue(d, path);
    if (!text) return null;
    const arr = Array.isArray(text) ? text : [text];
    return arr.map((item: string, index: number) => (
      <p key={index} className={textStyle}>
        {item}
      </p>
    ));
  };

  // Helper to get section content with type assertion
  const getSection = (section: unknown) => section as Record<string, unknown>;

  return (
    <TheorieParent title={d.title as string}>
      <Collapse title={getSection(d.sectionOne).sectionTitle as string}>
        <div>{renderText("sectionOne.content.0.text")}</div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            {renderText("sectionOne.content.1.text")}
          </div>
          <div className="flex flex-col flex-1 pb-2">
            <img
              className="h-full"
              src={
                (
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).image as string
              }
              alt={
                (
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText &&
                (
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText["text"] as string)
              }
            />
            <a
              className="text-base"
              href={
                (
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText["link"] as string)
              }
            >
              {(
                (getSection(d.sectionOne).content as unknown[])[1] as Record<
                  string,
                  unknown
                >
              ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).imageText["text"] as string)}
            </a>
          </div>
        </div>
        {renderText("sectionOne.content.2.text")}
        {renderText("sectionOne.content.3.text")}
        <div className="flex flex-row-reverse flex-wrap">
          <div className="flex flex-1">
            {renderText("sectionOne.content.4.text")}
          </div>
          <div className="flex flex-col flex-1 pb-2 min-w-[570px]">
            <img
              className="h-full"
              src={
                (
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).image as string
              }
              alt={
                (
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).imageText["text"] as string)
              }
            />
            <a
              className="text-base"
              href={
                (
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).imageText["link"] as string)
              }
            >
              {(
                (getSection(d.sectionOne).content as unknown[])[4] as Record<
                  string,
                  unknown
                >
              ).imageText &&
                ((
                  (getSection(d.sectionOne).content as unknown[])[4] as Record<
                    string,
                    unknown
                  >
                ).imageText["text"] as string)}
            </a>
          </div>
        </div>
      </Collapse>
      <Collapse title={getSection(d.sectionTwo).sectionTitle as string}>
        <div>
          {renderText("sectionTwo.content.0.text")}
          {renderText("sectionTwo.content.1.text")}
          <ol className="ml-8 list-decimal">
            {(() => {
              const items =
                (getSection(d.sectionTwo).content as unknown[])[2] &&
                (getSection(d.sectionTwo).content as unknown[])[2]["text"];
              if (!items) return null;
              const arr = Array.isArray(items) ? items : [items];
              return arr.map((item: string, idx: number) => (
                <li key={idx} className={textStyle}>
                  {item}
                </li>
              ));
            })()}
          </ol>
          <div className="flex flex-row-reverse flex-wrap">
            <div className="flex flex-col flex-1">
              {(() => {
                const items =
                  (getSection(d.sectionTwo).content as unknown[])[3] &&
                  (getSection(d.sectionTwo).content as unknown[])[3]["text"];
                if (!items) return null;
                const arr = Array.isArray(items) ? items : [items];
                return arr.map((item: string, idx: number) => (
                  <li key={idx} className={textStyle}>
                    {item}
                  </li>
                ));
              })()}
            </div>
            <div className="flex flex-col flex-1 pb-2 min-w-[570px]">
              <img
                className="h-full"
                src={
                  getSection((getSection(d.sectionTwo).content as unknown[])[3])
                    .image as string
                }
                alt={
                  getSection((getSection(d.sectionTwo).content as unknown[])[3])
                    .imageText &&
                  (getSection(
                    (getSection(d.sectionTwo).content as unknown[])[3]
                  ).imageText["text"] as string)
                }
              />
              <a
                className="text-base"
                href={
                  getSection((getSection(d.sectionTwo).content as unknown[])[3])
                    .imageText &&
                  (getSection(
                    (getSection(d.sectionTwo).content as unknown[])[3]
                  ).imageText["link"] as string)
                }
              >
                {getSection((getSection(d.sectionTwo).content as unknown[])[3])
                  .imageText &&
                  (getSection(
                    (getSection(d.sectionTwo).content as unknown[])[3]
                  ).imageText["text"] as string)}
              </a>
            </div>
          </div>
          {renderText("sectionTwo.content.4.text")}
          {renderText("sectionTwo.content.5.text")}
          {renderText("sectionTwo.content.6.text")}
          {renderText("sectionTwo.content.7.text")}
          {renderText("sectionTwo.content.8.text")}
          <ol className="ml-8 list-decimal">
            {(() => {
              const items =
                (getSection(d.sectionTwo).content as unknown[])[9] &&
                (getSection(d.sectionTwo).content as unknown[])[9]["text"];
              if (!items) return null;
              const arr = Array.isArray(items) ? items : [items];
              return arr.map((item: string, idx: number) => (
                <li key={idx} className={textStyle}>
                  {item}
                </li>
              ));
            })()}
          </ol>
          {renderText("sectionTwo.content.10.text")}
          <ol className="ml-8 list-decimal">
            {(() => {
              const items =
                (getSection(d.sectionTwo).content as unknown[])[11] &&
                (getSection(d.sectionTwo).content as unknown[])[11]["text"];
              if (!items) return null;
              const arr = Array.isArray(items) ? items : [items];
              return arr.map((item: string, idx: number) => (
                <li key={idx} className={textStyle}>
                  {item}
                </li>
              ));
            })()}
          </ol>
        </div>
      </Collapse>
      <Collapse title={getSection(d.sectionThree).sectionTitle as string}>
        <div>
          {renderText("sectionThree.content.0.text")}
          {renderText("sectionThree.content.1.text")}
          <ol className="ml-8 list-decimal">
            {(() => {
              const items =
                (getSection(d.sectionThree).content as unknown[])[2] &&
                (getSection(d.sectionThree).content as unknown[])[2]["text"];
              if (!items) return null;
              return (Array.isArray(items) ? items : [items]).map(
                (item: string | string[], idx: number) => {
                  if (Array.isArray(item)) {
                    return (
                      <ul key={idx} className="ml-8">
                        {item.map((subItem: string, subIdx: number) => (
                          <li key={`${idx}-${subIdx}`} className={textStyle}>
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <li key={idx} className={textStyle}>
                      {item}
                    </li>
                  );
                }
              );
            })()}
          </ol>
        </div>
      </Collapse>
    </TheorieParent>
  );
};

export default PrincipePhysiques;
