import { FaGraduationCap, FaBook } from "react-icons/fa6";
import HeroComponent from "./HeroComponent";
import { Link } from "react-router-dom";
import { HomepageData } from "../interfaces/homepage";

interface Props {
  cardSection: HomepageData["cardSection"];
}

export const HeroSection = ({ cardSection }: Props) => {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      <Link to="/theorie">
        <HeroComponent
          title={cardSection.cardOne.title}
          description={cardSection.cardOne.description}
        >
          <div className="p-1 border-2 rounded-full avatar">
            <div className="rounded-full bg-physioBlue ">
              <FaGraduationCap size={60} className="m-6" color={"white"} />
            </div>
          </div>
        </HeroComponent>
      </Link>

      <Link to="/protocoles">
        <HeroComponent
          title={cardSection.cardTwo.title}
          description={cardSection.cardTwo.description}
        >
          <div className="p-1 border-2 rounded-full avatar">
            <div className="rounded-full bg-physioBlue ">
              <FaBook size={60} className="p-2 m-6" color={"white"} />
            </div>
          </div>
        </HeroComponent>
      </Link>
    </div>
  );
};
