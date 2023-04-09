import React from "react";
import { Modal as ModalFor } from "antd";
import "./Modal.css";

const Modal = ({ open, onClose, title, okText, onOk, onCancel, children }) => (
  <ModalFor
    open={open}
    onClose={onClose}
    title={title}
    okText={okText}
    onOk={onOk}
    onCancel={onCancel}
    getContainer={false}
    forceRender={false}
  >
    {children}
  </ModalFor>
);
export default Modal;
