import React, { useEffect } from "react";
import Child2 from "./Child2";

const Child1 = ({ userName }) => {
  useEffect(() => {
    console.log("Child1 Console");
  }, [userName]);
  return (
    <div>
      Child1
      <Child2 userName={userName} />
    </div>
  );
};

export default Child1;
