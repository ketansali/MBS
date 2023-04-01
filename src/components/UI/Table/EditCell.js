
import React from "react";

export default function ({ handleEdit }) {
  return <div className="deleteBtn">
  <i className="ion-android-create" onClick={() => handleEdit()}/>
</div>;
}


