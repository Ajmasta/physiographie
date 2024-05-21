import React, { useState } from "react";

type Props = {
  images: string[];
  source: string;
};

const ImageViewer = ({ images, source }: Props) => {
  const [activeImage, setActiveImage] = useState(images ? images[0] : "");

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={source + activeImage} className="h-[40vh]" />
      <div className="flex flex-row ">
        {images?.map((image, idx) => (
          <img
            key={idx + image}
            src={source + image}
            className="w-12 h-12 m-2 duration-200 ease-in-out border-2 cursor-pointer hover:shadow-lg shadow-black"
            style={
              activeImage === image
                ? { border: "4px lightgreen solid", borderRadius: "5px" }
                : {}
            }
            onClick={() => setActiveImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
