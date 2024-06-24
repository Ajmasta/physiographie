import TextGenerator from "../components/TextGenerator";
import EquipeText from "../i18n/fr/equipe.json";
import { textStyle } from "./theorie/PrincipePhysiques";

const Equipe = () => {
  return (
    <div className="px-4 lg:px-24">
      <div>
        <p className="py-5 text-4xl font-bold text-slate-600">
          {EquipeText.sectionOne.title}
        </p>

        <div className="flex flex-row flex-wrap">
          <div className="flex items-center justify-center flex-1 p-4 sm:min-w-[320px] max-w-[100%] min-w-[250px]">
            <img src="/equipe_pathokin.jpg" />
          </div>
          <div className="flex flex-col justify-center flex-1 gap-5 px-8">
            <TextGenerator
              text={EquipeText.sectionOne.paragraphOne}
              classes={textStyle}
            />
            <TextGenerator
              text={EquipeText.sectionOne.paragraphTwo}
              classes={textStyle}
            />
            <a href="http://www.pathokin.ca/">
              <p className={`underline ${textStyle}`}>
                {EquipeText.sectionOne.linkText}
              </p>
            </a>
          </div>
        </div>

        <p className="py-5 mt-5 text-4xl font-bold text-slate-600">
          {EquipeText.sectionTwo.title}
        </p>
        <div className="flex flex-row flex-wrap justify-around">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full w-[80%]">
              <img src="/dany-gagnon.jpg" className="rounded-full" />
            </div>
            <p className={textStyle}>Dany Gagnon</p>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <div className="rounded-full w-[80%]">
              <img
                src="/antoine-deschamps-laporte.jpg"
                className="rounded-full"
              />
            </div>
            <p className={textStyle}>Antoine Deschamps-Laporte</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full  w-[80%]">
              <img src="/philippe-paquette.jpg" className="rounded-full" />
            </div>
            <p className={textStyle}>Philippe Paquette</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;

//colonne photos logos remerciements
