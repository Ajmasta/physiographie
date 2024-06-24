import Collapse from "../../components/Collapse";
import TheorieParent from "../../components/theorie/TheorieParent";
import principesPhysiques from "../../i18n/fr/theorie/principesPhysiques.json";

export const textStyle = "py-2 text-xl leading-8";

const PrincipePhysiques = () => {
  return (
    <TheorieParent title={principesPhysiques.title}>
      <Collapse title={principesPhysiques.sectionOne.sectionTitle}>
        <div>
          <p className={textStyle}>
            {principesPhysiques.sectionOne.content[0].text}
          </p>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col flex-1">
            <p className={textStyle}>
              {principesPhysiques.sectionOne.content[1].text[0]}
            </p>
            <p className={textStyle}>
              {principesPhysiques.sectionOne.content[1].text[1]}
            </p>
          </div>
          <div className="flex flex-col flex-1 pb-2">
            <img
              className="h-full"
              src={principesPhysiques.sectionOne.content[1].image}
            />
            <a
              className="text-base"
              href={principesPhysiques.sectionOne.content[1].imageText?.link}
            >
              {principesPhysiques.sectionOne.content[1].imageText?.text}
            </a>
          </div>
        </div>
        <p className={textStyle}>
          {principesPhysiques.sectionOne.content[2].text}
        </p>
        <p className={textStyle}>
          {principesPhysiques.sectionOne.content[3].text}
        </p>
        <div className="flex flex-row-reverse flex-wrap">
          <div className="flex flex-1">
            <p className={textStyle}>
              {principesPhysiques.sectionOne.content[4].text}
            </p>
          </div>
          <div className="flex flex-col flex-1 pb-2 min-w-[570px]">
            <img
              className="h-full"
              src={principesPhysiques.sectionOne.content[4].image}
            />
            <a
              className="text-base"
              href={principesPhysiques.sectionOne.content[4].imageText?.link}
            >
              {principesPhysiques.sectionOne.content[4].imageText?.text}
            </a>
          </div>
        </div>
      </Collapse>
      <Collapse title={principesPhysiques.sectionTwo.sectionTitle}>
        <div>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[0].text}
          </p>
          <ol className="ml-8 list-decimal">
            <li className={textStyle}>
              {principesPhysiques.sectionTwo.content[1].text}
            </li>
            <ol className="ml-8" style={{ listStyleType: "lower-alpha" }}>
              {principesPhysiques.sectionTwo.content[2].text.map((item) => (
                <li className={textStyle}>{item}</li>
              ))}
            </ol>
            <div className="flex flex-row-reverse flex-wrap">
              <div className="flex flex-col flex-1">
                {principesPhysiques.sectionTwo.content[3].text.map((item) => (
                  <li className={textStyle}>{item}</li>
                ))}
              </div>
              <div className="flex flex-col flex-1 pb-2 min-w-[570px]">
                <img
                  className="h-full"
                  src={principesPhysiques.sectionTwo.content[3].image}
                />
                <a
                  className="text-base"
                  href={
                    principesPhysiques.sectionTwo.content[3].imageText?.link
                  }
                >
                  {principesPhysiques.sectionTwo.content[3].imageText?.text}
                </a>
              </div>
            </div>
            <li className={textStyle}>
              {principesPhysiques.sectionTwo.content[4].text}
            </li>
          </ol>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[5].text}
          </p>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[6].text}
          </p>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[7].text}
          </p>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[8].text}
          </p>
          <ol className="ml-8 list-decimal">
            {principesPhysiques.sectionTwo.content[9].text.map((item) => (
              <li className={textStyle}>{item}</li>
            ))}
          </ol>
          <p className={textStyle}>
            {principesPhysiques.sectionTwo.content[10].text}
          </p>
          <ol className="ml-8 list-decimal">
            {principesPhysiques.sectionTwo.content[11].text.map((item) => (
              <li className={textStyle}>{item}</li>
            ))}
          </ol>
        </div>
      </Collapse>
      <Collapse title={principesPhysiques.sectionThree.sectionTitle}>
        <div>
          <p className={textStyle}>
            {principesPhysiques.sectionThree.content[0].text}
          </p>
          <p className={textStyle}>
            {principesPhysiques.sectionThree.content[1].text}
          </p>
          <ul className="ml-8">
            {principesPhysiques.sectionThree.content[2].text.map((item) => {
              if (Array.isArray(item)) {
                return item.map((subItem) => (
                  <ul className="ml-8">
                    <li className={textStyle}>{subItem}</li>
                  </ul>
                ));
              } else {
                return <li className={textStyle}>{item}</li>;
              }
            })}
          </ul>
        </div>
      </Collapse>
    </TheorieParent>
  );
};

export default PrincipePhysiques;
