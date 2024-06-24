import React from "react";
import Collapse from "../../components/Collapse";
import protocolIntro from "../../i18n/fr/protocols/protocolIntro.json";
import { Link, ScrollRestoration } from "react-router-dom";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const ProtocolIntro = () => {
  return (
    <div className="flex flex-col xl:px-64">
      <h1 className="py-8 text-3xl font-bold">{protocolIntro.title}</h1>
      <div className="w-full">
        <div className="flex flex-row flex-wrap justify-center gap-3 text-xl align-center text-physioBlue">
          {protocolIntro.sections.map((section, index) => (
            <div className="flex flex-row py-4 pb-8">
              <a href={`#${section.id}`} className="hover:text-blue-300">
                <p> {section.title} </p>
              </a>
              {index !== protocolIntro.sections.length - 1 && (
                <p className="ml-2">|</p>
              )}
            </div>
          ))}
        </div>

        {protocolIntro.sections.map((section) => (
          <Collapse title={section.title}>
            <span
              id={section.id}
              className="absolute"
              style={{ top: "-150px" }}
            />

            {section.subSections.map((subSection) => (
              <Collapse subtitle title={subSection.title}>
                <div className="flex flex-col items-center md:flex-row">
                  <img src={subSection.image} className="py-4 rounded-[50px]" />
                  <div className="flex flex-col gap-3 px-4 lg:flex-wrap">
                    {subSection.protocols.map((protocol) => (
                      <Link to={protocol.link}>
                        <li className="ml-2 text-xl leading-8 underline hover:text-blue-300 text-physioBlue hover:cursor-pointer">
                          {protocol.title}
                        </li>
                      </Link>
                    ))}
                  </div>
                </div>
              </Collapse>
            ))}
          </Collapse>
        ))}
      </div>
      <ScrollRestoration />
      <ScrollToHashElement />
    </div>
  );
};
export default ProtocolIntro;
