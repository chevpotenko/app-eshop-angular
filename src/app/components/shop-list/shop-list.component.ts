import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods/goods.service';
import { SharedService } from '../../services/shared/shared.service';
import { Goods } from '../../class/goods';

@Component({
	selector: 'app-shop-list',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

	public goods: Goods[];
	
	constructor(private goodsService: GoodsService,
				private sharedService: SharedService) {

	}

	ngOnInit() {
		this.goodsService.getGoods().subscribe((result) => {
			this.goods = result;
		});    
	}

	addToCart($event, id) {
		$event.preventDefault();
		this.goodsService.addToCart(id).subscribe((result) => { 
			let cart:any = result;      
			this.sharedService.setCartTotalQty(cart.totalQty);
			this.sharedService.setCartTotalPrice(cart.totalPrice);
		});
	}

}
