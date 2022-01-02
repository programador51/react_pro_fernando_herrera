import { onChangeArgs, ShoppingItem } from "02-component-patterns/interfaces/products.interfaces";
import { useState } from "react";

export default function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ShoppingItem; }>({});

    const onEditItem = (info: onChangeArgs) => {
        console.log(info.quantity);

        if (info.quantity <= 0) {
            const unreferencedCopy = JSON.parse(JSON.stringify(shoppingCart));

            delete unreferencedCopy[info.product.id];

            setShoppingCart(unreferencedCopy);
            return;
        }

        setShoppingCart((oldItem) => ({
            ...oldItem,
            [info.product.id]: {
                ...info.product,
                quantity: info.quantity,
            },
        }));
    };

    return {
        onEditItem,
        shoppingCart
    }
}