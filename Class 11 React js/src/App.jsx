import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const inputRef = useRef();

  const inputHandler = () => {
    console.log(inputRef.current.value);
  };

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Hi there</h1>
      {/* Controlled Component  */}
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h3>{input}</h3>

      {/* Un-Controlled Component  */}
      <input type="text" ref={inputRef} />
      <h3>{input2}</h3>
      <button onClick={() => inputHandler()}>submit</button>
    </>
  );
}

export default App;
