import React from "react";
import ImageViewer from "./ImageViewer";
import TextGenerator from "../TextGenerator";
import { Images } from "../../interfaces/protocol";
import Table, { TableCellData } from "./Table";
type Props = {
  content: string[];
  images?: Images[];
  source?: string;
  table?: TableCellData[][];
};

const ParagraphTextSection = ({ content, images, source, table }: Props) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col">
        {source && images && <ImageViewer images={images} source={source} />}

        <div>
          {content.map((paragraph) => (
            <>
              <TextGenerator text={paragraph} classes="text-lg leading-8" />
              <br />
            </>
          ))}
          {table && <Table rows={table} />}
        </div>
      </div>
    </div>
  );
};

export default ParagraphTextSection;
