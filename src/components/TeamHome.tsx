import React from "react";

type Props = {
  descriptionText: DescriptionText[];
};

type DescriptionText = {
  title: string;
  text: string;
};

const TeamHome = ({ descriptionText }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="self-center h-1 w-72 max-w-screen align-center bg-physioBlue"></div>

      <div className="flex items-center justify-center w-full p-4">
        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-2">
          {descriptionText.map((description, index) => (
            <div key={index} className="p-4 bg-white rounded-lg">
              <h3 className="mb-2 text-xl font-bold text-physioBlue">
                {description.title}
              </h3>
              <p className="text-gray-700">{description.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamHome;
