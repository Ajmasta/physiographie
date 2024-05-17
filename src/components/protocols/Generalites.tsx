import React from 'react';

interface TableCellData {
  data: string; 
  colspan?: number; 
  rowspan?:number;
}

interface TableProps {
  rows: TableCellData[][]; 
}

const Generalites: React.FC<TableProps> = (props) => {
      console.log(props)

    return (
    <table>
      <tbody>
        {props?.rows?.map((row,i) => (
          <tr key={i}>
            {row.map((cell,y) => (
              <td   colSpan={cell.colspan || 1}
              rowSpan={cell.rowspan || 1} key={cell.data+i+y}
              className={"border-white border-2 p-2"}>
                {cell.data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Generalites;
