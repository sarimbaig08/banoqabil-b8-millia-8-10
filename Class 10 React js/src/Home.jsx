import React, { useContext, useEffect } from "react";
import Child1 from "./Child1";
import MyContext from "./utils/context";

const Home = ({ userName }) => {
  // useEffect(() => {
  //   console.log("Home Console");
  // }, [userName]);

  const data = useContext(MyContext);
  console.log("data", data);
  return (
    <div>
      Home {data}
      <Child1 userName={userName} />
    </div>
  );
};

export default Home;
