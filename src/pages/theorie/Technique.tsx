import technique from "../../i18n/fr/theorie/technique.json";
import Collapse from "../../components/Collapse";
import { textStyle } from "./PrincipePhysiques";
import TheorieParent from "../../components/theorie/TheorieParent";
import ImageViewer from "../../components/protocols/ImageViewer";

const Technique = () => {
  return (
    <TheorieParent title={technique.title}>
      <Collapse title={technique.sectionOne.title}>
        <div>
          <ol className="ml-8 list-decimal">
            {technique.sectionOne.content[0].text.map((item) => {
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

            {technique.sectionOne.content[1].text.map((item) => {
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

            {technique.sectionOne.content[2].text.map((item) => {
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
          </ol>
        </div>
      </Collapse>
      <Collapse title={technique.sectionTwo.title}>
        <div>
          <ol className="ml-8 list-decimal">
            {technique.sectionTwo.content[0].text.map((item) => {
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
            <ImageViewer
              source="/"
              images={technique.sectionTwo.content[0].images}
            />
            {technique.sectionTwo.content[1].text.map((item) => {
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

            <ImageViewer
              source="/"
              images={technique.sectionTwo.content[1].images}
            />
            {technique.sectionTwo.content[2].text.map((item) => {
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
            <ImageViewer
              source="/"
              images={technique.sectionTwo.content[2].images}
            />
            {technique.sectionTwo.content[3].text.map((item) => {
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
            <ImageViewer
              source="/"
              images={technique.sectionTwo.content[3].images}
            />
          </ol>
        </div>
      </Collapse>
      <Collapse title={technique.sectionThree.title}>
        <Collapse
          subtitle
          title={technique.sectionThree.sections.sectionOne.title}
        >
          {technique.sectionThree.sections.sectionOne.text.map((item) => (
            <p className={textStyle}>{item}</p>
          ))}
        </Collapse>
        <Collapse
          subtitle
          title={technique.sectionThree.sections.sectionTwo.title}
        >
          {technique.sectionThree.sections.sectionTwo.text.map((item) => {
            if (Array.isArray(item)) {
              return (
                <ol className="ml-8 list-decimal">
                  {item.map((subItem) => (
                    <li className={textStyle}>{subItem}</li>
                  ))}
                </ol>
              );
            } else {
              return <p className={textStyle}>{item}</p>;
            }
          })}
        </Collapse>
        <Collapse
          subtitle
          title={technique.sectionThree.sections.sectionThree.title}
        >
          <ol className="ml-8 list-decimal">
            {technique.sectionThree.sections.sectionThree.text.map((item) => {
              if (Array.isArray(item)) {
                return (
                  <ul className="ml-8">
                    {item.map((subItem) => (
                      <li className={textStyle}>{subItem}</li>
                    ))}
                  </ul>
                );
              } else {
                return <li className={textStyle}>{item}</li>;
              }
            })}
          </ol>
        </Collapse>
        <Collapse title={technique.sectionThree.sections.sectionFour.title}>
          <ol className="ml-8 list-decimal">
            {technique.sectionThree.sections.sectionFour.text.map((item) => {
              if (Array.isArray(item)) {
                return (
                  <ul className="ml-8">
                    {item.map((subItem) => (
                      <li className={textStyle}>{subItem}</li>
                    ))}
                  </ul>
                );
              } else {
                return <li className={textStyle}>{item}</li>;
              }
            })}
          </ol>
        </Collapse>
      </Collapse>
    </TheorieParent>
  );
};

export default Technique;
