import { InitialValues, onChangeArgs, Product } from "02-component-patterns/interfaces/products.interfaces";
import { useEffect, useRef, useState } from "react";

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void;
    /**
     * Initial value for the counter
     */
    value?: number;
    initialValues?: InitialValues;
}

export default function useProduct({
    product,
    onChange,
    value = 0,
    initialValues
}: useProductArgs) {
    const [counter, setCounter] = useState(initialValues?.quantity || value);

    const isControlled = useRef(!!onChange);

    const isMounted = useRef(false);


    useEffect(() => {

        if (!isMounted.current) return;

        setCounter(value);

    }, [value]);

    // Order of use effects matters ??
    useEffect(() => {
        isMounted.current = true;
    }, []);

    const increase = () => {

        const newCounter = counter + 1;

        setCounter(newCounter);

        if (isControlled.current) {
            return onChange!({
                quantity: newCounter,
                product
            })
        }

        onChange && onChange({
            product: product,
            quantity: newCounter
        });
    }
    const decrease = () => {
        const newCounter = counter - 1 < 0 ? 0 : counter - 1;

        setCounter(newCounter);

        if (isControlled.current) {
            return onChange!({
                quantity: newCounter,
                product
            })
        }

        onChange && onChange({
            quantity: newCounter,
            product
        });
    };

    return {
        counter, increase, decrease
    }
}