import React, { useContext, useEffect } from "react";
import MyContext from "./utils/context";

const Child2 = ({ userName }) => {
  // useEffect(() => {
  //   console.log("Child2 Console");
  // }, [userName]);

  const data = useContext(MyContext);

  return <div>Child2:{data}</div>;
};

export default Child2;
