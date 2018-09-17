import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    
    public shoppingcart;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getAll('api/shoppingcart').subscribe( result => {
            this.shoppingcart = result;
        })
    }  

}
