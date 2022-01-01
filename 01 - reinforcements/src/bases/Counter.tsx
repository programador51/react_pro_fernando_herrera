import React from "react";
import { useState } from "react";

/**
 *
 * @param props - Props of components
 * @param props.initialValue - Initial value of the counter
 * @returns
 */
export default function Counter({
  initialValue = 0,
}: {
  initialValue: number;
}) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);

  return (
    <>
      <h1>Counter {counter}</h1>

      <button onClick={increment}>+1</button>
    </>
  );
}
