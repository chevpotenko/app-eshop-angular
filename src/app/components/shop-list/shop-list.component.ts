import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
	selector: 'app-shop-list',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

	public goods;
	
	constructor(private dataService: DataService,
				private sharedService: SharedService) {

	}

	ngOnInit() {
		this.dataService.getAll('api/goods').subscribe((result) => {
			this.goods = result;
		});    
	}

	addToCart($event, id) {
		$event.preventDefault();
		this.dataService.getSingle('api/cart/add/', id).subscribe((result) => { 
			let cart:any = result;      
			this.sharedService.setCartTotalQty(cart.totalQty);
			this.sharedService.setCartTotalPrice(cart.totalPrice);
		});
	} 

}
