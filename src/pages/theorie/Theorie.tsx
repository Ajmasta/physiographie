import theorie from "../../i18n/fr/theorie/theorie.json";
import TextGenerator from "../../components/TextGenerator";
import HeroComponent from "../../components/HeroComponent";
import Icon, { IconList } from "../../components/Icon";
import { Link } from "react-router-dom";

const iconsList: IconList[] = ["book", "flask", "puzzle", "star"];

const linkList = [
  "terminologie",
  "principes-physiques",
  "technique",
  "avantages",
];
const Theorie = () => {
  return (
    <div className="flex flex-col px-4 lg:px-64">
      <h1 className="py-6 text-3xl font-bold">{theorie.title}</h1>
      <TextGenerator
        text={theorie.descriptionText}
        classes="text-lg leading-8"
      />
      <h2 className="py-8 text-2xl font-bold">{theorie.subtitle}</h2>
      <div className="flex flex-row flex-wrap items-center self-center justify-center gap-3">
        {theorie.sectionsTitles.map((sectionTitle, idx) => (
          <Link to={linkList[idx]}>
            <HeroComponent title={sectionTitle}>
              <div className="p-1 border-2 rounded-full avatar">
                <div className="rounded-full bg-slate-400">
                  <Icon
                    size={40}
                    className="m-6"
                    color="white"
                    icon={iconsList[idx]}
                  />
                </div>
              </div>
            </HeroComponent>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Theorie;
