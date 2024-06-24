import { FaGraduationCap, FaBook } from "react-icons/fa6";
import Text from "../i18n/fr/homepage.json";
import HeroComponent from "./HeroComponent";
export const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      <HeroComponent
        title={Text.cardSection.cardOne.title}
        description={Text.cardSection.cardOne.description}
      >
        <div className="p-1 border-2 rounded-full avatar">
          <div className="rounded-full bg-physioBlue ">
            <FaGraduationCap size={60} className="m-6" color={"white"} />
          </div>
        </div>
      </HeroComponent>

      <HeroComponent
        title={Text.cardSection.cardTwo.title}
        description={Text.cardSection.cardTwo.description}
      >
        <div className="p-1 border-2 rounded-full avatar">
          <div className="rounded-full bg-physioBlue ">
            <FaBook size={60} className="p-2 m-6" color={"white"} />
          </div>
        </div>
      </HeroComponent>
    </div>
  );
};
