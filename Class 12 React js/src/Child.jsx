import React from "react";

const Child = ({ updateName }) => {
  return (
    <div>
      <input type="text" onChange={(e) => updateName(e.target.value)} />
    </div>
  );
};

export default Child;
