import React from "react";
import { InputSearch } from "@iso/components/uielements/input";
import SearchInput from '@iso/components/uielements/InputElement/SearchInput/SearchInput';
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
  rowKey,
  header,
  searchHide
}) {
  return (
    <>
      {
        !header ? <TitleWrapper>
          <ComponentTitle>{title}</ComponentTitle>
          {
            !searchHide && (
              <div>
                <SearchInput
                  placeholder="search..."
                  onChange={handleSearch}
                />
              </div>
            )
          }
        </TitleWrapper> : null}
      <AntTables columns={columns} data={data} pagination={pagination} handlePage={handlePage} rowKey={rowKey} />
    </>
  );
}
