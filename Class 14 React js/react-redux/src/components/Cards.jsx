import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/slice/counterSlice";

const Card = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter value:{count}</h1>
      <button className={`w-${count}px`} onClick={() => dispatch(increment())}>
        increment
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Inc By Amount
      </button>
    </>
  );
};

export default Card;
