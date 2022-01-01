import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap'

const maxCounter = 10;

export default function useCounter(initialValue = 0) {

    const [counter, setCounter] = useState(initialValue);

    const counterNode = useRef<HTMLHeadingElement>(null);

    const timeline = useRef(gsap.timeline());

    const increment = () => {
        const newCounterValue = counter + 1;
        setCounter(newCounterValue > maxCounter ? counter : newCounterValue);
    };

    useLayoutEffect(function () {

        if (!counterNode.current) return;

        timeline.current.to(counterNode.current, { y: -10, duration: 1 });
        timeline.current.to(counterNode.current, { y: 0, duration: 1 });
        timeline.current.pause();
    }, [])

    useEffect(
        function () {
            timeline.current.play(0);
        },
        [counter]
    );

    return {
        counter,
        increment,
        counterNode
    }
}