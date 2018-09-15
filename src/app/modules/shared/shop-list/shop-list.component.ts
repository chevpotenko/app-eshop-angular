import { Component, Input, OnInit } from '@angular/core';
import { Goods } from '../../../class/goods';
import { ShopService } from '../../../services/shop/shop.service';

@Component({
	selector: 'app-shop-list',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

	@Input() list: Goods[];	
	
	constructor(private shopService: ShopService) {

	}

	ngOnInit() {
		    
	}
	
	addToCart(id, amount) {	
		this.shopService.addProductToCart(id, amount);
	}
}
