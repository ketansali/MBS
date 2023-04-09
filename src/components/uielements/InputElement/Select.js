import React from "react";
import { Select } from "antd";
import './Styles/Select.style.css';
const { Option } = Select;

const SimpleSelect = ({ options, handleChange, placeholder, allowClear ,value,children}) => (
  <Select
  style={{borderRadius:"40px"}}
    options={options}
    onChange={handleChange}
    placeholder={placeholder}
    allowClear={allowClear}
    value={value}
  >{children}</Select>
);

export { SimpleSelect, Option };
