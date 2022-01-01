import React from "react";
import { useState } from "react";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

export default function Counter({ initialValue = 10 }: Props) {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clickedTimes: 0,
  });

  const { counter, clickedTimes } = counterState;

  /**
   * Increment the value of the counter
   * @param incrementBy - Number to be increased the counter
   */
  const increment = (incrementBy: number) =>
    setCounterState({
      counter: counterState.counter + incrementBy,
      clickedTimes: counterState.clickedTimes + 1,
    });

  return (
    <>
      <h1>Counter by {counter}</h1>
      <h1>Clicked times {clickedTimes}</h1>

      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(5)}>+5</button>
    </>
  );
}
