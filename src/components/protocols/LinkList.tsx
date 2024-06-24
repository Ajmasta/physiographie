import TextGenerator from "../TextGenerator";

interface Content {
  linkTitle: string;
  link: string;
}
type Props = {
  content: Content[];
  sectionTitle: string;
};

const LinkList = ({ content, sectionTitle }: Props) => {
  return (
    <>
      <div tabIndex={0} className="text-lg bg-white">
        <TextGenerator
          classes="font-bold text-[#616161] text-xl ml-3 py-4"
          text={sectionTitle}
        />
      </div>
      <div className="">
        <ul className="ml-6 list-disc">
          {content.map((link, index) => (
            <a href={link.link}>
              <li key={index} className="mb-4 text-lg list-item">
                <TextGenerator span text={link.linkTitle} classes="underline" />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default LinkList;
