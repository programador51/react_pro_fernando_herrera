import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";
// import { gsap } from "gsap";
import useCounter from "hooks/useCounter";

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

export default function CounterHook({ initialValue = 77 }: Props) {
  const { counter, counterNode, increment } = useCounter(initialValue);

  return (
    <>
      <h1>Counter hook:</h1>
      <h2 ref={counterNode}>{counter}</h2>

      <button onClick={increment}>+1</button>
    </>
  );
}
