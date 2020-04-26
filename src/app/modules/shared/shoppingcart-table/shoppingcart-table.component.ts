import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop/shop.service';
import { CartItem, OrderTotal } from '../../../class/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-shoppingcart-table',
    templateUrl: './shoppingcart-table.component.html',
    styleUrls: ['./shoppingcart-table.component.css']
})
export class ShoppingcartTableComponent implements OnInit {
    public shoppingcart$: BehaviorSubject<CartItem[]>;
    public orderTotal$: BehaviorSubject<OrderTotal>;

    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.shoppingcart$ = this.shopService.cart;
        this.orderTotal$ = this.shopService.orderTotal;
    }

    updateProductAmounts(cartItem, actionType) {
        switch (actionType) {
            case 'increase':
                cartItem.product.qty = cartItem.product.qty + 1;
                cartItem.product.total = cartItem.product.qty * cartItem.product.price;
                this.shopService.addProductToCart(cartItem);
                break;
            case 'decrease':
                if (cartItem.product.qty > 0) {
                    cartItem.product.qty = cartItem.product.qty - 1;
                    cartItem.product.total = cartItem.product.qty * cartItem.product.price;
                    this.shopService.addProductToCart(cartItem);
                }
                break;
        }
    }

}
