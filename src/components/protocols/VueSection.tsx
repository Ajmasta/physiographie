import React from "react";
import ImageViewer from "./ImageViewer";
import { FaCheck, FaCrosshairs } from "react-icons/fa6";
import { FaCog, FaSearch } from "react-icons/fa";
import TextGenerator from "../TextGenerator";

interface Identification {
  acronymes: string[];
  texte: string[];
}
export interface Vue {
  objectifs: (string | string[])[];
  parametres: string[];
  positionnement: string[];
  imagePositionnement: string[];
  identification: Identification[];
  imageIdentification: string[];
  source: string;
  title: string;
}
type Props = {
  vue: Vue;
};

const VueSection = ({ vue }: Props) => {
  return (
    <div tabIndex={0} className=" collapse collapse-arrow bg-base-100">
      <input type="checkbox" defaultChecked={true} />

      <div className="relative collapse-title">
        <TextGenerator text={vue.title} span classes="text-xl font-medium " />
        <span id={vue.title} className="absolute" style={{ top: "-110px" }} />
      </div>

      <div className="bg-white collapse-content">
        <div className="flex flex-row items-center">
          <FaCheck size={18} className="mr-2" />
          <p
            className="text-lg font-semibold "
            style={{ fontVariant: "small-caps" }}
          >
            Objectifs
          </p>
        </div>
        <ul className="ml-12">
          {vue.objectifs.map((objectif) =>
            Array.isArray(objectif) ? (
              <ul className="ml-4">
                {objectif.map((item) => (
                  <li>
                    <TextGenerator span text={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <li>
                <TextGenerator span text={objectif} />
              </li>
            )
          )}
        </ul>

        <div className="flex flex-row items-center">
          <FaCog size={18} className="mr-2" />
          <p
            className="text-lg font-semibold "
            style={{ fontVariant: "small-caps" }}
          >
            Paramètres suggérés
          </p>
        </div>
        <ul className="ml-12">
          {vue.parametres.map((parametre) => (
            <li>
              <TextGenerator span text={parametre} />
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center">
          <FaCrosshairs size={18} className="mr-2" />
          <p
            className="text-lg font-semibold "
            style={{ fontVariant: "small-caps" }}
          >
            Positionnement de la sonde
          </p>
        </div>
        <ul className="ml-12">
          {vue.positionnement.map((conseil) => (
            <li>
              <TextGenerator span text={conseil} />
            </li>
          ))}
        </ul>
        <ImageViewer images={vue.imagePositionnement} source={vue.source} />
        <div>
          <div className="flex flex-row items-center">
            <FaSearch size={18} className="mr-2" />
            <p
              className="text-lg font-semibold "
              style={{ fontVariant: "small-caps" }}
            >
              Identification des structures
            </p>
          </div>
          <div className="flex flex-col">
            <ImageViewer images={vue.imageIdentification} source={vue.source} />
            {vue.identification.map((item) => {
              return (
                <div className="flex flex-row items-start justify-start mb-4 ">
                  <p className="flex flex-row font-bold min-w-32">
                    {item.acronymes.map((acronyme) => (
                      <>
                        [<TextGenerator span text={acronyme} />]
                      </>
                    ))}
                  </p>
                  <p>
                    {item.texte.map((item) => (
                      <TextGenerator span text={item} />
                    ))}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VueSection;
