import React from "react";
export default function ({ handleDelete ,title}) {
  return (
    <div>
      <i className="ion-android-delete" onClick={() => handleDelete()} title={title} />
    </div>
  );
}
