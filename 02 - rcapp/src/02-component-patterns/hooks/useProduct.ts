import { onChangeArgs, Product } from "02-component-patterns/interfaces/products.interfaces";
import { useEffect, useRef, useState } from "react";

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void;
    /**
     * Initial value for the counter
     */
    value?: number;
}

export default function useProduct({
    product,
    onChange,
    value = 0
}: useProductArgs) {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    useEffect(() => {
        setCounter(value);
    }, [value]);

    const increase = () => {

        const newCounter = counter + 1;

        if (isControlled.current) {
            return onChange!({
                quantity: newCounter,
                product
            })
        }

        setCounter(newCounter);

        onChange && onChange({
            product: product,
            quantity: newCounter
        });
    }
    const decrease = () => {

        const newCounter = counter - 1 <= 0 ? 0 : counter - 1;

        if (isControlled.current) {
            return onChange!({
                quantity: newCounter,
                product
            })
        }

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