import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../class/product';
import { ShopService } from '../../../services/shop/shop.service';

@Component({
	selector: 'app-shop-list',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

	@Input() list: Product[];	
	
	constructor(private shopService: ShopService) {

	}

	ngOnInit() {
		    
	}
	
	addToCart(product, amount) {	
		this.shopService.addProductToCart(product, amount);
	}
}
