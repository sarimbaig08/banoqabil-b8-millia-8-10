import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import MyContext from "./utils/context";

function App() {
  const userName = "Mirza Sarim";
  // const MyContext = React.createContext();

  return (
    <>
      <div>
        <MyContext.Provider value={userName}>
          <Home fullName={userName} />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
