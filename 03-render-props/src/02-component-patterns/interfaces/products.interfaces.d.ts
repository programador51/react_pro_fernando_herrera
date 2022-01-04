export interface InitialValues {
    /**
     * Requested items
     */
    quantity?: number;

    /**
     * Max items can request
     */
    maxQuantity?: number;
}

export interface Props {
    product: Product;
    className?: string;
    // children?: ReactElement | ReactElement[];
    children: (message?: string) => JSX.Element
    onChange?: (args: onChangeArgs) => void;
    /**
     * Initial value for the counter button
     */
    value?: number;

    initialValues?: InitialValues;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    decrease: () => void;
    increase: () => void;
    product: Product;
}

export interface ShoppingItem extends Product {
    quantity: number
}

export interface onChangeArgs {
    product: Product;
    quantity: number;
}