import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function ({ handleDelete }) {
  return (
    <RiDeleteBin6Line size={20} title="Delete" onClick={() => handleDelete()} />
  );
}
