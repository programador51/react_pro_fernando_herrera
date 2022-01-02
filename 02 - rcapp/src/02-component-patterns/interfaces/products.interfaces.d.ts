export interface Props {
    product: Product;
    className?: string;
    children?: ReactElement | ReactElement[];
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