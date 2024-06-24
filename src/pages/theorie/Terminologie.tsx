import React from "react";
import terminologie from "../../i18n/fr/theorie/terminologie.json";
import Collapse from "../../components/Collapse";
import Table from "../../components/protocols/Table";
import TheorieParent from "../../components/theorie/TheorieParent";

const Terminologie = () => {
  return (
    <TheorieParent title={terminologie.title}>
      {terminologie.content.map((table) => (
        <Collapse title={table.tableTitle}>
          <div className="pt-4">
            <Table rows={table.rangees} />
          </div>
        </Collapse>
      ))}
    </TheorieParent>
  );
};
export default Terminologie;
