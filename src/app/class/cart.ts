export class CartItem {
    id: number;
    product: {
        id: number;
        name: string;
        price: number;
        color: string;
        size: string;
        qty: number;
        total: number;
    };
}

export class OrderTotal {
    total: number;
    qty: number;
}
