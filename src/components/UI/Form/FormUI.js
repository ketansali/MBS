import React from "react";
import { Form } from "antd";

const FromLeftItem = ({ name, label, placeholder, rules, children }) => (
  <Form.Item
    name={name}
    label={label}
    placeholder={placeholder}
    rules={rules}
    style={{
      display: "inline-block",
      width: "calc(50% - 8px)",
    }}
  >
    {children}
  </Form.Item>
);

const FromRightItem = ({ name, label, placeholder, rules, children }) => (
  <Form.Item
    name={name}
    label={label}
    placeholder={placeholder}
    rules={rules}
    style={{
      display: "inline-block",
      width: "calc(50% - 8px)",
      margin: "0 8px",
    }}
  >
    {children}
  </Form.Item>
);
export { FromLeftItem, FromRightItem };
