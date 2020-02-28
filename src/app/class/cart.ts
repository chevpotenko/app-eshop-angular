import { Product } from './product';

export class CartItem {
    product: Product;
    id: number;
    qty: number;
    total: number;
}

export class OrderTotal {
    price: number;
    quantity: number;
}
