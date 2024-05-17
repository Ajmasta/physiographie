import { FaGraduationCap, FaBook } from "react-icons/fa6";
import Text from "../i18n/fr/homepage.json";
export const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center bg-white">
      <div className="mx-2 card w-96 ">
        <figure className="px-10 pt-10 bg">
          <div className="p-1 border-2 rounded-full avatar">
            <div className="rounded-full bg-physioBlue ">
              <FaGraduationCap size={60} className="m-6" color={"white"} />
            </div>
          </div>
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title"> {Text.cardSection.cardOne.title}</h2>
          <p>{Text.cardSection.cardOne.description}</p>
        </div>
      </div>
      <div className="mx-2 card w-96">
        <figure className="px-10 pt-10">
          <div className="p-1 border-2 rounded-full avatar">
            <div className="rounded-full bg-physioBlue ">
              <FaBook size={60} className="p-2 m-6" color={"white"} />
            </div>
          </div>
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title"> {Text.cardSection.cardTwo.title}</h2>
          <p>{Text.cardSection.cardTwo.description}</p>
        </div>
      </div>
      
    </div>
  );
};
