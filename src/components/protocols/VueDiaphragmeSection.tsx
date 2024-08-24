import React from "react";
import ImageViewer from "./ImageViewer";
import { FaBook, FaCheck, FaCrosshairs, FaRegUser } from "react-icons/fa6";
import { FaCog, FaRegListAlt, FaSearch } from "react-icons/fa";
import TextGenerator from "../TextGenerator";
import Collapse from "../Collapse";
import { Images } from "../../interfaces/protocol";
import Table, { TableCellData } from "./Table";

interface LegendItem {
  acronymes: string[];
  texte: string[];
}

interface IdentificationItem {
  title?: string;
  legend: LegendItem[];
  imageIdentification: Images[];
}

export interface Vue {
  objectifs: (string | string[])[];
  parametres: (string | string[])[];
  positionnement: (string | string[])[];
  positionnementPatient: (string | string[])[];
  imagePositionnement: Images[];
  identification: IdentificationItem[];
  valeursRefPathologies: (string | string[])[];
  source: string;
  title: string;
  extraText?: string[];
  normes?: TableCellData[][];
  video: Images;
}
type Props = {
  vue: Vue;
};

const VueDiaphragmeSection = ({ vue }: Props) => {
  return (
    <div className="relative text-lg leading-8">
      <Collapse title={vue.title} subtitle>
        <span id={vue.title} className="absolute" style={{ top: "-110px" }} />

        <div className="mt-2 bg-white">
          <div className="flex flex-row items-center">
            <FaCheck size={18} className="mr-2" />
            <p
              className="text-xl font-semibold "
              style={{ fontVariant: "small-caps" }}
            >
              Objectifs
            </p>
          </div>
          <ul className="ml-12">
            {vue.objectifs?.map((objectif) =>
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
              className="text-xl font-semibold "
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
              className="text-xl font-semibold "
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
              <FaRegUser size={18} className="mr-2" />
              <p
                className="text-xl font-semibold "
                style={{ fontVariant: "small-caps" }}
              >
                Positionnement du patient
              </p>
            </div>
            <ul className="ml-12">
              {vue.positionnementPatient.map((conseil) => (
                <li>
                  <TextGenerator span text={conseil} />
                </li>
              ))}
            </ul>

            <div className="flex flex-row items-center">
              <FaSearch size={18} className="mr-2" />
              <p
                className="text-xl font-semibold "
                style={{ fontVariant: "small-caps" }}
              >
                Identification des structures
              </p>
            </div>
            <div className="flex flex-col mt-4">
              {vue.identification.map((item) => {
                return (
                  <>
                    <p className="font-bold text-[#616161] text-xl ml-3 mb-4">
                      {item.title}
                    </p>
                    <ImageViewer
                      images={item.imageIdentification}
                      source={vue.source}
                      acronyms={item.legend.map(
                        (legendObject) => legendObject.acronymes
                      )}
                    />

                    {item.legend.map((legendItem) => (
                      <div className="flex flex-row items-start justify-start mb-4 ">
                        <p className="flex flex-row mr-4 font-bold md:min-w-32 sm:mr-0">
                          {legendItem.acronymes.map((acronyme) => (
                            <>
                              [<TextGenerator span text={acronyme} />]
                            </>
                          ))}
                        </p>
                        {legendItem.texte.map((item) => (
                          <TextGenerator span text={item} />
                        ))}
                      </div>
                    ))}
                  </>
                );
              })}
            </div>
            <div className="flex flex-row items-center">
              <FaSearch size={18} className="mr-2" />
              <p
                className="text-xl font-semibold "
                style={{ fontVariant: "small-caps" }}
              >
                Vidéo
              </p>
            </div>
            <div className="flex justify-center w-full mb-4">
              <video controls>
                <source src={vue.source + vue.video.path} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-row items-center mb-4">
            <FaRegListAlt size={18} className="mr-2" />
            <p
              className="text-xl font-semibold"
              style={{ fontVariant: "small-caps" }}
            >
              Valeurs normatives pour la zone d'apposition
            </p>
          </div>
          {vue.extraText?.map((text) => (
            <TextGenerator text={text} />
          ))}
          {vue.normes && <Table rows={vue.normes} />}
        </div>
        <ul className="ml-12">
          {vue.valeursRefPathologies?.map((valeur) =>
            Array.isArray(valeur) ? (
              <ul className="ml-4">
                {valeur.map((item) => (
                  <li>
                    <TextGenerator span text={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <li>
                <TextGenerator span text={valeur} classes="underline" />
              </li>
            )
          )}
        </ul>
      </Collapse>
    </div>
  );
};

export default VueDiaphragmeSection;
