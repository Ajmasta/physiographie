import React from "react";
import TextGenerator from "../TextGenerator";
import Collapse from "../Collapse";
import ImageViewer from "./ImageViewer";
import { Images } from "../../interfaces/protocol";
import VueDiaphragmeSection, { VueDiaphragm } from "./VueDiaphragmeSection";

interface Subsection {
  title: string;
  imagePositionnement?: Images[];
  text: (string | string[])[];
  source?: string;
}
interface ApplicationDynamique {
  title: string;
  iframe: string;
}
interface Content {
  subtitle: string;
  text: (string | string[])[];
  subSection?: Subsection[];
  images?: Images[];
  source?: string;
}
type Props = {
  content: Content[];
  vues?: VueDiaphragm[];
  applicationDynamique?: ApplicationDynamique;
};

const ListTextSectionDiaphragme = ({
  content,
  vues,
  applicationDynamique,
}: Props) => {
  return (
    <div tabIndex={0} className="text-lg bg-white">
      {content.map((item) => (
        <div className="relative">
          <span
            id={item.subtitle}
            className="absolute"
            style={{ top: "-110px" }}
          />
          <Collapse title={item.subtitle} subtitle>
            <div className="mt-2 leading-8">
              {item.images && (
                <ImageViewer source={item.source} images={item.images} />
              )}
              <ul className="list-disc md:ml-6">
                {item.subSection?.length > 0
                  ? item.subSection.map((subSection) => (
                      <Collapse subtitle title={subSection.title}>
                        {subSection.imagePositionnement?.length > 0 && (
                          <ImageViewer
                            images={subSection.imagePositionnement}
                            source={subSection.source}
                          />
                        )}
                        {subSection.text.map((element, index) => {
                          return Array.isArray(element) ? (
                            element.map((item, idx) => (
                              <li
                                key={idx}
                                className="ml-6 list-item list-[circle]"
                              >
                                <TextGenerator span text={item} />
                              </li>
                            ))
                          ) : (
                            <li key={index} className="list-item">
                              <TextGenerator span text={element} />
                            </li>
                          );
                        })}
                      </Collapse>
                    ))
                  : item.text.map((element, index) => {
                      return Array.isArray(element) ? (
                        element.map((item, idx) => (
                          <li
                            key={idx}
                            className="ml-6 list-item list-[circle]"
                          >
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
          </Collapse>
        </div>
      ))}

      {vues?.map((vue) => (
        <VueDiaphragmeSection vue={vue} />
      ))}
      {applicationDynamique && (
        <Collapse subtitle title={applicationDynamique.title}>
          <span
            id={applicationDynamique.title}
            className="absolute"
            style={{ top: "-160px" }}
          />
          <div className="flex flex-row items-center justify-center">
            <span
              dangerouslySetInnerHTML={{ __html: applicationDynamique?.iframe }}
            />
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default ListTextSectionDiaphragme;
