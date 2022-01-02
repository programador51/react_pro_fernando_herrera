export interface Props {
    product: Product;
    className?: string;
    children?: ReactElement | ReactElement[];
    onChange?: (args: onChangeArgs) => void;
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