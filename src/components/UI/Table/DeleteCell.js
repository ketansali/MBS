import React from "react";
export default function ({ handleDelete }) {
  return (
    <div>
      <i className="ion-android-delete" onClick={() => handleDelete()} />
    </div>
  );
}
