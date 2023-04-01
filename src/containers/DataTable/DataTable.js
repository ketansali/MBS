import React from "react";
import { InputSearch } from "@iso/components/uielements/input";
import AntTables from "./AntTables";
import {
  TitleWrapper,
  ComponentTitle,
} from "@iso/components/uielements/InputStyle/Input.style";
export default function AntTable({
  columns,
  data,
  title,
  handleSearch,
  handlePage,
  pagination,
  rowKey
}) {
  return (
    <>
      <TitleWrapper>
        <ComponentTitle>{title}</ComponentTitle>
        <div>
          <InputSearch
            placeholder="input search text"
            onChange={handleSearch}
          />
        </div>
      </TitleWrapper>
      <AntTables columns={columns} data={data} pagination={pagination} handlePage={handlePage} rowKey={rowKey}/>
    </>
  );
}
