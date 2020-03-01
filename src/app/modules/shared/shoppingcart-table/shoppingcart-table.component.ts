import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop/shop.service';
import {CartItem, OrderTotal} from '../../../class/cart';

@Component({
    selector: 'app-shoppingcart-table',
    templateUrl: './shoppingcart-table.component.html',
    styleUrls: ['./shoppingcart-table.component.css']
})
export class ShoppingcartTableComponent implements OnInit {
    public shoppingcart: CartItem[];
    public orderTotal: OrderTotal;

    constructor(private shopService: ShopService) {}

    ngOnInit() {
        this.shopService.cart.subscribe(result => {
            this.shoppingcart = result;
        });
        this.shopService.orderTotal.subscribe(result => {
            this.orderTotal = result;
        });
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
