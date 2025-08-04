import React from "react";
import TheorieParent from "../../components/theorie/TheorieParent";
import { textStyle } from "./PrincipePhysiques";
import Collapse from "../../components/Collapse";
import {
  useTheoryTranslation,
  TheoryData,
} from "../../hooks/useTheoryTranslation";

const Avantages = () => {
  const { data, error } = useTheoryTranslation("avantages");

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const d = data as TheoryData;
  const getSection = (section: unknown) => section as Record<string, unknown>;

  const renderNestedList = (
    items: (string | string[])[],
    listType: "decimal" | "disc",
    idx?: number
  ) => {
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
      <Collapse
        title={
          getSection(d.sections).sectionOne &&
          (getSection(getSection(d.sections).sectionOne).title as string)
        }
      >
        <p className={textStyle}>
          {getSection(getSection(d.sections).sectionOne).text as string}
        </p>
      </Collapse>
      <Collapse
        title={
          getSection(d.sections).sectionTwo &&
          (getSection(getSection(d.sections).sectionTwo).title as string)
        }
      >
        <Collapse
          subtitle
          title={
            getSection(
              getSection(getSection(d.sections).sectionTwo).subsections
            ).subsectionOne &&
            (getSection(
              getSection(
                getSection(getSection(d.sections).sectionTwo).subsections
              ).subsectionOne
            ).title as string)
          }
        >
          <ol className="ml-8 list-decimal">
            {renderNestedList(
              getSection(
                getSection(
                  getSection(getSection(d.sections).sectionTwo).subsections
                ).subsectionOne
              ).text as (string | string[])[],
              "decimal",
              1
            )}
          </ol>
        </Collapse>
        <Collapse
          subtitle
          title={
            getSection(
              getSection(getSection(d.sections).sectionTwo).subsections
            ).subsectionTwo &&
            (getSection(
              getSection(
                getSection(getSection(d.sections).sectionTwo).subsections
              ).subsectionTwo
            ).title as string)
          }
        >
          <ol className="ml-8 list-disc">
            {renderNestedList(
              getSection(
                getSection(
                  getSection(getSection(d.sections).sectionTwo).subsections
                ).subsectionTwo
              ).text as (string | string[])[],
              "disc",
              2
            )}
          </ol>
        </Collapse>
      </Collapse>
      <Collapse
        title={
          getSection(d.sections).sectionThree &&
          (getSection(getSection(d.sections).sectionThree).title as string)
        }
      >
        <Collapse
          subtitle
          title={
            getSection(
              getSection(getSection(d.sections).sectionThree).subsections
            ).subsectionOne &&
            (getSection(
              getSection(
                getSection(getSection(d.sections).sectionThree).subsections
              ).subsectionOne
            ).title as string)
          }
        >
          <ol className="ml-8 list-decimal">
            {renderNestedList(
              getSection(
                getSection(
                  getSection(getSection(d.sections).sectionThree).subsections
                ).subsectionOne
              ).text as (string | string[])[],
              "decimal",
              3
            )}
          </ol>
        </Collapse>
        <Collapse
          subtitle
          title={
            getSection(
              getSection(getSection(d.sections).sectionThree).subsections
            ).subsectionTwo &&
            (getSection(
              getSection(
                getSection(getSection(d.sections).sectionThree).subsections
              ).subsectionTwo
            ).title as string)
          }
        >
          <ol className="ml-8 list-disc">
            {renderNestedList(
              getSection(
                getSection(
                  getSection(getSection(d.sections).sectionThree).subsections
                ).subsectionTwo
              ).text as (string | string[])[],
              "disc",
              4
            )}
          </ol>
        </Collapse>
      </Collapse>
      <Collapse title={getSection(d.sectionFour).title as string}>
        <ol className="ml-8 list-disc">
          {renderNestedList(
            getSection(d.sectionFour).text as (string | string[])[],
            "disc",
            5
          )}
        </ol>
      </Collapse>
    </TheorieParent>
  );
};

export default Avantages;
