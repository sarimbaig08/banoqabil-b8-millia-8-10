import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-orange-100 p-2">
        Tailwind Css
      </h1>
      <h2>{count}</h2>
      <button
        className="px-5 py-2 bg-amber-400 rounded-2xl"
        onClick={() => dispatch(increment("Hello"))}
      >
        Increment
      </button>
    </>
  );
}
import { increment } from "./store/slice/counterSlice";

export default App;
