import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'

const maxCounter = 10;

export default function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    const counterNode = useRef<HTMLHeadingElement>(null);

    const increment = () => {
        const newCounterValue = counter + 1;
        setCounter(newCounterValue > maxCounter ? counter : newCounterValue);
    };

    useEffect(
        function () {
            if (counter < maxCounter) return;

            const timeline = gsap.timeline();

            timeline.to(counterNode.current, { y: -10, duration: 1 });
            timeline.to(counterNode.current, { y: 0, duration: 1 });

            // gsap.to(counterNode.current, { y: -10, duration: 1 });
        },
        [counter]
    );

    return {
        counter,
        increment,
        counterNode
    }
}