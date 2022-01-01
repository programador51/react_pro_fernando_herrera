import { useState } from "react";

export default function useProduct() {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1 <= 0 ? 0 : counter - 1);

    return {
        counter, increase, decrease
    }
}