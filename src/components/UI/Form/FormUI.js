import React from "react";
import { Form } from "antd";
import { FromLeftItemStyle, FromRightItemStyle } from "./FormUI.style";
const FromLeftItem = ({ name, label, placeholder, rules, children }) => (
  <FromLeftItemStyle>
    <Form.Item
      name={name}
      label={label}
      placeholder={placeholder}
      rules={rules}
    >
      {children}
    </Form.Item>
  </FromLeftItemStyle>
);

const FromRightItem = ({ name, label, placeholder, rules, children }) => (
  <FromRightItemStyle>
    <Form.Item
      name={name}
      label={label}
      placeholder={placeholder}
      rules={rules}
    >
      {children}
    </Form.Item>
  </FromRightItemStyle>
);
export { FromLeftItem, FromRightItem };
