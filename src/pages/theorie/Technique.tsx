import React from "react";
import Collapse from "../../components/Collapse";
import { textStyle } from "./PrincipePhysiques";
import TheorieParent from "../../components/theorie/TheorieParent";
import ImageViewer from "../../components/protocols/ImageViewer";
import {
  useTheoryTranslation,
  TheoryData,
} from "../../hooks/useTheoryTranslation";
import { Images } from "../../interfaces/protocol";

const Technique = () => {
  const { data, error } = useTheoryTranslation("technique");

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const d = data as TheoryData;
  const getSection = (section: unknown) => section as Record<string, unknown>;

  const renderNestedList = (items: (string | string[])[], idx?: number) => {
    return items.map((item, itemIdx) => {
      if (Array.isArray(item)) {
        return (
          <ul key={`${idx}-${itemIdx}`} className="ml-8">
            {item.map((subItem, subIdx) => (
              <li key={`${idx}-${itemIdx}-${subIdx}`} className={textStyle}>
                {subItem}
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <li key={`${idx}-${itemIdx}`} className={textStyle}>
            {item}
          </li>
        );
      }
    });
  };

  return (
    <TheorieParent title={d.title as string}>
      <Collapse title={getSection(d.sectionOne).title as string}>
        <div>
          <ol className="ml-8 list-decimal">
            {renderNestedList(
              (
                (getSection(d.sectionOne).content as unknown[])[0] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              0
            )}
            {renderNestedList(
              (
                (getSection(d.sectionOne).content as unknown[])[1] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              1
            )}
            {renderNestedList(
              (
                (getSection(d.sectionOne).content as unknown[])[2] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              2
            )}
          </ol>
        </div>
      </Collapse>
      <Collapse title={getSection(d.sectionTwo).title as string}>
        <div>
          <ol className="ml-8 list-decimal">
            {renderNestedList(
              (
                (getSection(d.sectionTwo).content as unknown[])[0] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              0
            )}
            <ImageViewer
              source="/"
              images={
                (
                  (getSection(d.sectionTwo).content as unknown[])[0] as Record<
                    string,
                    unknown
                  >
                ).images as Images[]
              }
            />
            {renderNestedList(
              (
                (getSection(d.sectionTwo).content as unknown[])[1] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              1
            )}
            <ImageViewer
              source="/"
              images={
                (
                  (getSection(d.sectionTwo).content as unknown[])[1] as Record<
                    string,
                    unknown
                  >
                ).images as Images[]
              }
            />
            {renderNestedList(
              (
                (getSection(d.sectionTwo).content as unknown[])[2] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              2
            )}
            <ImageViewer
              source="/"
              images={
                (
                  (getSection(d.sectionTwo).content as unknown[])[2] as Record<
                    string,
                    unknown
                  >
                ).images as Images[]
              }
            />
            {renderNestedList(
              (
                (getSection(d.sectionTwo).content as unknown[])[3] as Record<
                  string,
                  unknown
                >
              ).text as (string | string[])[],
              3
            )}
            <ImageViewer
              source="/"
              images={
                (
                  (getSection(d.sectionTwo).content as unknown[])[3] as Record<
                    string,
                    unknown
                  >
                ).images as Images[]
              }
            />
          </ol>
        </div>
      </Collapse>
      <Collapse title={getSection(d.sectionThree).title as string}>
        <Collapse
          subtitle
          title={
            getSection(getSection(d.sectionThree).sections).sectionOne &&
            (getSection(
              getSection(getSection(d.sectionThree).sections).sectionOne
            ).title as string)
          }
        >
          {(
            getSection(
              getSection(getSection(d.sectionThree).sections).sectionOne
            ).text as string[]
          ).map((item, idx) => (
            <p key={idx} className={textStyle}>
              {item}
            </p>
          ))}
        </Collapse>
        <Collapse
          subtitle
          title={
            getSection(getSection(d.sectionThree).sections).sectionTwo &&
            (getSection(
              getSection(getSection(d.sectionThree).sections).sectionTwo
            ).title as string)
          }
        >
          {(() => {
            const items = getSection(
              getSection(getSection(d.sectionThree).sections).sectionTwo
            ).text as (string | string[])[];
            return items.map((item, idx) => {
              if (Array.isArray(item)) {
                return (
                  <ol key={idx} className="ml-8 list-decimal">
                    {item.map((subItem, subIdx) => (
                      <li key={`${idx}-${subIdx}`} className={textStyle}>
                        {subItem}
                      </li>
                    ))}
                  </ol>
                );
              } else {
                return (
                  <p key={idx} className={textStyle}>
                    {item}
                  </p>
                );
              }
            });
          })()}
        </Collapse>
        <Collapse
          subtitle
          title={
            getSection(getSection(d.sectionThree).sections).sectionThree &&
            (getSection(
              getSection(getSection(d.sectionThree).sections).sectionThree
            ).title as string)
          }
        >
          <ol className="ml-8 list-decimal">
            {(() => {
              const items = getSection(
                getSection(getSection(d.sectionThree).sections).sectionThree
              ).text as (string | string[])[];
              return items.map((item, idx) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={idx} className="ml-8">
                      {item.map((subItem, subIdx) => (
                        <li key={`${idx}-${subIdx}`} className={textStyle}>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <li key={idx} className={textStyle}>
                      {item}
                    </li>
                  );
                }
              });
            })()}
          </ol>
        </Collapse>
        <Collapse
          subtitle
          title={
            getSection(getSection(d.sectionThree).sections).sectionFour &&
            (getSection(
              getSection(getSection(d.sectionThree).sections).sectionFour
            ).title as string)
          }
        >
          <ol className="ml-8 list-decimal">
            {(() => {
              const items = getSection(
                getSection(getSection(d.sectionThree).sections).sectionFour
              ).text as (string | string[])[];
              return items.map((item, idx) => {
                if (Array.isArray(item)) {
                  return (
                    <ul key={idx} className="ml-8">
                      {item.map((subItem, subIdx) => (
                        <li key={`${idx}-${subIdx}`} className={textStyle}>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <li key={idx} className={textStyle}>
                      {item}
                    </li>
                  );
                }
              });
            })()}
          </ol>
        </Collapse>
      </Collapse>
    </TheorieParent>
  );
};

export default Technique;
