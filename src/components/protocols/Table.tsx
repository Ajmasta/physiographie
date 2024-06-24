import TextGenerator from "../TextGenerator";

export interface TableCellData {
  data: string;
  colspan?: number;
  rowspan?: number;
  header?: boolean;
}

interface Props {
  rows: TableCellData[][];
  sectionTitle?: string;
  text?: string[];
}

const Table = ({ rows, sectionTitle, text }: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      {sectionTitle && (
        <TextGenerator text={sectionTitle} classes="font-bold text-lg py-4" />
      )}
      <table className="border-collapse">
        <tbody>
          {rows?.map((row, i) => (
            <tr key={i}>
              {row.map((cell, y) => (
                <td
                  colSpan={cell.colspan || 1}
                  rowSpan={cell.rowspan || 1}
                  key={cell.data + i + y}
                  className={"border-black border p-2"}
                >
                  <TextGenerator
                    text={cell.data}
                    classes={
                      cell.header ? "font-bold leading-8 text-lg" : "text-lg"
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {text?.map((paragraph) => (
        <p>
          <TextGenerator text={paragraph} classes="text-lg leading-8" />
        </p>
      ))}
    </div>
  );
};

export default Table;
