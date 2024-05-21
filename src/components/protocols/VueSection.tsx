import React from "react";
import ImageViewer from "./ImageViewer";
import { FaCheck, FaCrosshairs } from "react-icons/fa6";
import { FaCog, FaSearch } from "react-icons/fa";

interface Identification {
  acronymes: string[];
  texte: string[];
}
interface Vue {
  objectifs: string[];
  parametres: string[];
  positionnement: string[];
  imagePositionnement: string[];
  identification: Identification[];
  imageIdentification: string[];
}
type Props = {
  vue: Vue;
};

const VueSection = ({ vue }: Props) => {
  return (
    <div>
      <div>
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
          {vue.objectifs.map((objectif) => (
            <li>{objectif}</li>
          ))}
        </ul>
      </div>
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
          <li>{parametre}</li>
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
          <li>{conseil}</li>
        ))}
      </ul>
      <ImageViewer
        images={vue.imagePositionnement}
        source={"/Protocoles/BicepsBrachial/vueTransversale/"}
      />
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
          <ImageViewer
            images={vue.imageIdentification}
            source={"/Protocoles/BicepsBrachial/vueTransversale/"}
          />
          {vue.identification.map((item) => {
            return (
              <div className="flex flex-row items-start justify-start mb-4 ">
                <p className="flex flex-row font-bold min-w-32">
                  {item.acronymes.map((acronyme) => (
                    <> [{acronyme}]</>
                  ))}
                </p>
                <p>
                  {item.texte.map((item) => (
                    <>{item}</>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VueSection;
