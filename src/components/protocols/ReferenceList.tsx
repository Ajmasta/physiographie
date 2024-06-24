import TextGenerator from "../TextGenerator";

interface Content {
  text: string;
}

type Props = {
  content: Content[];
  sectionTitle: string;
};

const ReferenceList = ({ content, sectionTitle }: Props) => {
  return (
    <>
      <div>
        <TextGenerator
          classes="font-bold text-[#616161] text-xl ml-3 py-4"
          text={sectionTitle}
        />
      </div>
      <div className="ml-10">
        <ol className="list-decimal">
          {content.map((item, index) => (
            <li className="mb-4 text-lg" id={`ref${index + 1}`}>
              <TextGenerator text={item.text} classes="underlined" />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ReferenceList;
