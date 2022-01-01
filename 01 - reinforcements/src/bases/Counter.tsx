import React from "react";
import { useState } from "react";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

export default function Counter({ initialValue = 0 }: Props) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);

  return (
    <>
      <h1>Counter {counter}</h1>

      <button onClick={increment}>+1</button>
    </>
  );
}
