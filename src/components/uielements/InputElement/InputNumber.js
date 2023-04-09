import React from "react";
import { InputNumber as Number } from "antd";

const InputNumber = ({
  defaultValue,
  width,
  min,
  max,
  onChange,
  placeholder
}) => (
  <Number
    style={{
        width:width,
        borderRadius:"4px"
    }}
    defaultValue={defaultValue}
    min={min}
    max={max}
    step={max}
    onChange={onChange}
    placeholder={placeholder}
    type="number"
  />
);

export { InputNumber };
