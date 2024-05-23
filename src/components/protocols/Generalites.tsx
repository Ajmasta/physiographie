import React from "react";
import TextGenerator from "../TextGenerator";

interface TableCellData {
  data: string;
  colspan?: number;
  rowspan?: number;
}

interface Props {
  rows: TableCellData[][];
  sectionTitle: string;
}

const Generalites = ({ rows, sectionTitle }: Props) => {
  return (
    <div tabIndex={0} className="bg-white collapse collapse-arrow">
      <input type="checkbox" defaultChecked={true} />
      <div className="text-xl font-medium collapse-title">
        <TextGenerator classes="text-xl font-medium" span text={sectionTitle} />
      </div>
      <div className="collapse-content">
        <table>
          <tbody>
            {rows?.map((row, i) => (
              <tr key={i}>
                {row.map((cell, y) => (
                  <td
                    colSpan={cell.colspan || 1}
                    rowSpan={cell.rowspan || 1}
                    key={cell.data + i + y}
                    className={"border-black border-2 p-2"}
                  >
                    <TextGenerator text={cell.data} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Generalites;
