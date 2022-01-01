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

export default function CounterHook({ initialValue = 8 }: Props) {
  const { counter, counterNode, increment } = useCounter(initialValue);

  return (
    <>
      <h1>Counter hook:</h1>
      <h2 ref={counterNode}>{counter}</h2>

      <button onClick={increment}>+1</button>
    </>
  );
}
