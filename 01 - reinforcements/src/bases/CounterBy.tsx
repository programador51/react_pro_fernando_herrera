import React from "react";
import { useState } from "react";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

interface CounterState {
  /**
   * Current number of the counter
   */
  counter: number;

  /**
   * Number of times that the button of increment was clicked
   */
  clickedTimes: number;
}

export default function Counter({ initialValue = 10 }: Props) {
  const [{ counter, clickedTimes }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clickedTimes: 0,
  });

  /**
   * Increment the value of the counter
   * @param incrementBy - Number to be increased the counter
   */
  const increment = (incrementBy: number) =>
    setCounterState({
      counter: counter + incrementBy,
      clickedTimes: clickedTimes + 1,
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
