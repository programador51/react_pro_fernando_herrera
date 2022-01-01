import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

/**
 * Max value that can reach the counter
 * @type {number}
 */
const maxCounter = 80;

export default function Counter({ initialValue = 77 }: Props) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    const newCounterValue = counter + 1;
    setCounter(newCounterValue > maxCounter ? counter : newCounterValue);
  };

  useEffect(
    function () {
      if (counter < 80) return;

      console.log("Max value reached");
    },
    [counter]
  );

  return (
    <>
      <h1>Counter effect {counter}</h1>

      <button onClick={increment}>+1</button>
    </>
  );
}
