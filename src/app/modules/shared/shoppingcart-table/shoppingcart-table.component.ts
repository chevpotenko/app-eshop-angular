import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../../../services/shop/shop.service';

@Component({
    selector: 'shoppingcart-table',
    templateUrl: './shoppingcart-table.component.html',
    styleUrls: ['./shoppingcart-table.component.css']
})
export class ShoppingcartTableComponent implements OnInit {

    private shoppingcart: any;

    constructor(private shopService: ShopService) {

    }

    ngOnInit() {
        this.shopService.getCart().subscribe((result) => {
            this.shopService.cart = result;
            this.shoppingcart = this.shopService.cart;
		});
    }
    
    updateProductAmounts(id, actionType) {
        let item;  
              
        item = this.shoppingcart.find((item) => {
            if(item.id == id){
                return true;
            }
        });

        switch(actionType) {
            case 'increase': 
                this.shopService.addProductToCart(item.product, 1);
                break;
            case 'decrease':
                if (item.qty > 0) {
                    this.shopService.addProductToCart(item.product, -1);                    
                }                
                break;
            default:
                item.qty = item.qty;
        }
    }

}
