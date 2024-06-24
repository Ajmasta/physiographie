import TextGenerator from "./TextGenerator";
import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const HeroComponent = ({ title, description, children }: Props) => {
  return (
    <div className="mx-2 card md:w-96">
      <figure className="px-10 pt-10 bg">{children}</figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">
          <TextGenerator classes={"card-title"} span text={title} />
        </h2>
        {description && <TextGenerator text={description} />}
      </div>
    </div>
  );
};

export default HeroComponent;
