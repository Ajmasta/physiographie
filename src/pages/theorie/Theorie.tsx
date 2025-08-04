import TextGenerator from "../../components/TextGenerator";
import HeroComponent from "../../components/HeroComponent";
import Icon, { IconList } from "../../components/Icon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const iconsList: IconList[] = ["book", "flask", "puzzle", "star"];

const linkList = [
  "terminologie",
  "principes-physiques",
  "technique",
  "avantages",
];

const Theorie = () => {
  const { t: tTheorie } = useTranslation("theorie");

  const getSectionTitles = (): string[] => {
    const titles = tTheorie("sectionsTitles", {
      returnObjects: true,
    }) as string[];
    return Array.isArray(titles) ? titles : [];
  };

  return (
    <div className="flex flex-col px-4 lg:px-64">
      <h1 className="py-6 text-3xl font-bold">{tTheorie("title")}</h1>
      <TextGenerator
        text={tTheorie("descriptionText")}
        classes="text-lg leading-8"
      />
      <h2 className="py-8 text-2xl font-bold">{tTheorie("subtitle")}</h2>
      <div className="flex flex-row flex-wrap items-center self-center justify-center gap-3">
        {getSectionTitles().map((title, idx) => (
          <Link key={linkList[idx]} to={linkList[idx]}>
            <HeroComponent title={title}>
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
