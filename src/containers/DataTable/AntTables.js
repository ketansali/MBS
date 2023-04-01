import React from "react";
import TableWrapper from "./AntTables.styles";
import './CommonDataTable.css'
export default function ({ columns, data, pagination, handlePage ,rowKey}) {
  return (
    <TableWrapper
      pagination={pagination}
      onChange={handlePage}
      columns={columns}
      dataSource={data}
      className="isoSimpleTable"
      rowKey={rowKey}
    />
  );
}
