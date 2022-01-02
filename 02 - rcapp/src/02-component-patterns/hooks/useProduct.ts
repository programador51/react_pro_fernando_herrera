import { onChangeArgs, Product } from "02-component-patterns/interfaces/products.interfaces";
import { useState } from "react";

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
}

export default function useProduct({
    product,
    onChange
}: useProductArgs) {
    const [counter, setCounter] = useState(0);

    const increase = () => {

        const newCounter = counter + 1;

        setCounter(newCounter);

        onChange && onChange({
            product: product,
            quantity: newCounter
        });
    }
    const decrease = () => {
        const newCounter = counter - 1 <= 0 ? 0 : counter - 1;
        setCounter(newCounter);
        onChange && onChange({
            quantity: newCounter,
            product
        });
    };

    return {
        counter, increase, decrease
    }
}