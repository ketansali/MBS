
import React from "react";

export default function ({ handleEdit,title }) {
  return <div className="deleteBtn">
  <i className="ion-android-create" onClick={() => handleEdit()} title={title}/>
</div>;
}


