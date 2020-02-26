import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop/shop.service';
import { CartItem } from '../../../class/cart';

@Component({
    selector: 'shoppingcart-table',
    templateUrl: './shoppingcart-table.component.html',
    styleUrls: ['./shoppingcart-table.component.css']
})
export class ShoppingcartTableComponent implements OnInit {
    public shoppingcart: CartItem[];
    public orderTotal: any;

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
                this.shopService.addProductToCart(cartItem.product, 1);
                break;
            case 'decrease':
                if (cartItem.qty > 0) {
                    this.shopService.addProductToCart(cartItem.product, -1);
                }
                break;
        }
    }

}
