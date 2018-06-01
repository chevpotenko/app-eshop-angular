import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods/goods.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    
    public shoppingCart;

    constructor(private goodsService: GoodsService) {

    }

    ngOnInit() {
        this.goodsService.getShoppingCart().subscribe(result => {
            console.log(result);
            this.shoppingCart = result;
        })
    }  

}
