import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

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

  const counterNode = useRef<HTMLHeadingElement>(null);

  const increment = () => {
    const newCounterValue = counter + 1;
    setCounter(newCounterValue > maxCounter ? counter : newCounterValue);
  };

  useEffect(
    function () {
      if (counter < 80) return;

      const timeline = gsap.timeline();

      timeline.to(counterNode.current, { y: -10, duration: 1 });
      timeline.to(counterNode.current, { y: 0, duration: 1 });

      // gsap.to(counterNode.current, { y: -10, duration: 1 });
    },
    [counter]
  );

  return (
    <>
      <h1>Counter effect:</h1>
      <h2 ref={counterNode}>{counter}</h2>

      <button onClick={increment}>+1</button>
    </>
  );
}
