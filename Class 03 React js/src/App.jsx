import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);

// Ternary Opr

  isDisplay == true ? "Condition is true" :  "condition is false"

  const toggleHide = () => {
    setIsDisplay(false)
  };

  const toggleDisplay = () => {
    setIsDisplay(true)
  };

    const toggleHideShow = () => {
    setIsDisplay(!isDisplay)
  };

const userInfo={
    name:"Mirza Sarim Baig",
    email:"sarimbaig321@gmail.com",
    stack:"MERN",
    imgURL:"https://avatars.githubusercontent.com/u/115108461?v=4?s=400"
}

  return (
    <>
      <h1>React js</h1>
      <button onClick={toggleHide}>Hide </button>
      <button onClick={toggleDisplay}>Display</button>
      <button onClick={toggleHideShow}>Toggle</button>
      

      {isDisplay ?
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          rerum.
        </p>
       : 
        ""
      }

      <UserCard userInfo={userInfo}/>
    </>
  );
}

export default App;
