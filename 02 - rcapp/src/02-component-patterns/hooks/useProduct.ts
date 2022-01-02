import { useState } from "react";

export default function useProduct(onChange = () => { }) {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
        onChange();
    }
    const decrease = () => {
        const newCounter = counter - 1 <= 0 ? 0 : counter - 1;
        setCounter(newCounter);
        onChange();
    };

    return {
        counter, increase, decrease
    }
}