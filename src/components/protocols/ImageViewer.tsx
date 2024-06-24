import { useState } from "react";
import { Images } from "../../interfaces/protocol";

type Props = {
  images: Images[];
  source: string;
  acronyms?: string[][];
};

const ImageViewer = ({ images, source, acronyms }: Props) => {
  const [activeImage, setActiveImage] = useState(
    images ? images[0] : { path: "", descriptionText: "" }
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={source + activeImage.path} className="h-[40vh]" />
      <p className="text-slate-400 min-h-8">{activeImage.descriptionText}</p>
      <div className="flex flex-row overflow-x-auto ">
        {images?.length > 1 &&
          images?.map((image, idx) => (
            <div className="flex flex-col items-center ">
              <img
                loading="lazy"
                key={idx + image.descriptionText}
                src={source + image.path}
                className="w-12 h-12 m-2 mb-1 duration-200 ease-in-out border-2 cursor-pointer hover:shadow-lg shadow-black"
                style={
                  activeImage.path === image.path
                    ? { border: "4px #37c0fb solid", borderRadius: "5px" }
                    : {}
                }
                onClick={() => setActiveImage(image)}
              />
              {acronyms &&
                acronyms.length === images.length - 2 &&
                idx !== 0 &&
                idx !== images.length - 1 &&
                acronyms[idx - 1].map((item) => (
                  <p className="text-xs font-bold">{item}</p>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageViewer;
