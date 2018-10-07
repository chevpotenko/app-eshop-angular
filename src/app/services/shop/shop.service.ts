import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { CartItem, OrderTotal } from '../../class/cart';

@Injectable()
export class ShopService {

    public cart = new BehaviorSubject([]);

    public orderTotal = new BehaviorSubject({
        price: 0,
        quantity: 0
    });

    constructor(private dataService: DataService) {
        this.fetchCart().subscribe((result: CartItem[]) => {
            this.setCart(result);
            this.calculateOrderTotal();
        }); 
    }

    get getCart(): Observable<CartItem[]> {
        return this.cart.asObservable();
    }

    setCart(cart: CartItem[]): void {
        this.cart.next(cart);
    }

    addCartItem(user: CartItem): void {
        this.cart.next([...this.cart.getValue(), user])
    }

    removeCartItem(id: string) {
        this.cart.next(this.cart.getValue().filter(v => v.id !== id));
    }

    updateCartItem(cartItem: CartItem) {
        this.cart.next(this.cart.getValue().map(item => {
            return item.id == cartItem.id ?  cartItem : item;
        }));
    }

    fetchCart() {
        return this.dataService.getAll('api/shoppingcart/');
    }

    get getOrderTotal(): Observable<OrderTotal> {
        return this.orderTotal.asObservable();
    }

    setOrderTotal(orderTotal: OrderTotal): void {
        this.orderTotal.next(orderTotal);
    }

    calculateCartItem (product, itemsAmount) {
        let itemCart = this.cart.getValue().find(item => {            
            return item.product.id == product.id
        });
        if (itemCart) {
            itemCart.qty = itemCart.qty + itemsAmount;
            itemCart.total = itemCart.total + (itemCart.product.price * itemsAmount);
            return itemCart;
        }
        return false;
    }

    createCartItem(product, itemsAmount) {
        return {
            product: product,
            id: this.cart.getValue().length + 1, 
            qty: itemsAmount,
            total: product.price * itemsAmount
        };
    }
    
    addProductToCart(product, itemsAmount) { 
        let itemCart = this.calculateCartItem(product, itemsAmount);

        if(!itemCart) {
            itemCart = this.createCartItem(product, itemsAmount);
            this.dataService.add('api/shoppingcart/', itemCart).subscribe(() => {
                this.addCartItem(itemCart);
                this.calculateOrderTotal();
            });
        } else {
            this.dataService.update('api/shoppingcart/', itemCart.id, itemCart).subscribe(() => {
                this.updateCartItem(itemCart);
                this.calculateOrderTotal();
            });
        }
    }

    calculateOrderTotal() {        
        let price = this.cart.getValue().reduce((accum, current) => {
            return accum + current.total
        }, 0);         
        let quantity = this.cart.getValue().reduce((accum, current) => {
            return accum + current.qty
        }, 0);

        this.setOrderTotal({
            price: price,
            quantity: quantity
        });
    }
}