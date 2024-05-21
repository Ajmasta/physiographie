import React from "react";
import ImageViewer from "./ImageViewer";
type Props = {
  content: string[];
  images: string[];
};

const ParagraphTextSection = ({ content, images }: Props) => {
  return (
    <div tabIndex={0} className=" collapse collapse-arrow bg-base-100">
      <input type="checkbox" defaultChecked={true} />

      <div className="text-xl font-medium collapse-title">
        Anatomie descriptive
      </div>
      <div className="bg-white collapse-content">
        <div className="flex flex-col">
          <ImageViewer images={images} source={"/Protocoles/BicepsBrachial/"} />

          <div>
            {content.map((paragraph) => (
              <>
                <p>{paragraph}</p>
                <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParagraphTextSection;
