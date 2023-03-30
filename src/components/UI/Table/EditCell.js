import { FaRegEdit } from "react-icons/fa";

import React from "react";

export default function ({ handleEdit }) {
  return <FaRegEdit size={20} title="Edit" onClick={() => handleEdit()} />;
}
