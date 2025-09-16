import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./Home";
import Child from "./Child";
import Wrapper from "./Wrapper";

function App() {
  const [userName, setUserName] = useState("");

  const product = {
    name: "Jacket",
    color: "Black",
    size: "Large",
    price: "100$",
  };

  return (
    <>
      <h1>hello</h1>
      <h2>UserName: {userName}</h2>
      {/* <input type="text" onChange={(e) => setUserName(e.target.value)} /> */}
      <Child updateName={setUserName} />
      {/* <Home bgColor={"green"} product={product} /> */}
      <Wrapper>
        <h1>This is a wrapper</h1>
      </Wrapper>
    </>
  );
}

export default App;
