import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';
import { CartItem, OrderTotal } from '../../class/cart';
import { environment } from '../../../environments/environment';

@Injectable()
export class ShopService {
    public cart = new BehaviorSubject([]);
    public orderTotal = new BehaviorSubject({
        total: 0,
        quantity: 0
    });

    constructor(private dataService: DataService) {
        this.fetchCart();
    }

    get getCart(): Observable<CartItem[]> {
        return this.cart.asObservable();
    }

    setCart(cart: CartItem[]): void {
        this.cart.next(cart);
    }

    get getOrderTotal(): Observable<OrderTotal> {
        return this.orderTotal.asObservable();
    }

    addCartItem(user: CartItem): void {
        this.cart.next([...this.cart.getValue(), user]);
    }

    removeCartItem(id: string) {
        this.cart.next(this.cart.getValue().filter(v => v.id !== id));
    }

    updateCartItem(cartItem: CartItem) {
        this.cart.next(this.cart.getValue().map(item => {
            return item.id === cartItem.id ? cartItem : item;
        }));
    }

    fetchCart() {
        return this.dataService
            .getAll(`${environment.apiUrl}api/cart`)
            .subscribe((result: CartItem[]) => {
                this.setCart(result);
                this.calculateOrderTotal();
            });
    }

    setOrderTotal(orderTotal: OrderTotal): void {
        this.orderTotal.next(orderTotal);
    }


    addProductToCart(cartItem) {
        this.dataService
            .update(`${environment.apiUrl}api/cart/`, cartItem.id, cartItem)
            .subscribe((cart: CartItem[]) => {
                this.setCart(cart);
                this.calculateOrderTotal();
            });
    }

    calculateOrderTotal() {
        const cart = this.cart.getValue();
        if (!cart.length) { return; }
        const total = cart.reduce((accum, current) => accum + current.product.total, 0);
        const quantity = cart.reduce((accum, current) => accum + current.product.qty, 0);
        this.setOrderTotal({ total, quantity });
    }
}
