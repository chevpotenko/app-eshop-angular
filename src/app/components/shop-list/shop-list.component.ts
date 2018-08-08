import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { SharedService } from '../../services/shared/shared.service';
import { ShopService } from '../../services/shop/shop.service';
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
	selector: 'app-shop-list',
	templateUrl: './shop-list.component.html',
	styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

	public goods;
	public cart;
	
	constructor(private dataService: DataService,
				private sharedService: SharedService,
				private shopService: ShopService) {

	}

	ngOnInit() {
		this.dataService.getAll('api/goods/').subscribe((result) => {
			this.goods = result;
		});

		this.dataService.getAll('api/shoppingcart/').subscribe((result) => {
			this.cart = result;
		});     
	}

	addToCart($event, id) {	
		$event.preventDefault();

		let isNewItem = true,
			newItem = {},
			indexItem;		

		this.dataService.getSingle('api/goods/', id).subscribe((product:any) => {

			this.cart.forEach((item, index) => {
				if ( item.product.id == product.id ){
					newItem = {
						product : product,
						id : product.id, 
						qty : ++item.qty,
						total : parseInt(item.total) + parseInt(product.price)
					};
					isNewItem = false;
					indexItem = index;					 
				}			
			});

			if (isNewItem){
				newItem = {
					product : product,
					id : product.id, 
					qty : 1,
					total : product.price
				}
			}				

			if (isNewItem){
				this.dataService.add('api/shoppingcart/', newItem).subscribe((product:any) => {
					this.cart.push(newItem);
					this.updateCartTotal(this.cart);					
				});
			 } else {
				this.dataService.update('api/shoppingcart/', id, newItem).subscribe((product:any) => {					
					this.cart.splice(indexItem, 1, newItem);
					this.updateCartTotal(this.cart);
				});
			}			
		});		
	}
	
	updateCartTotal(cart) {		
		let cartTotal = this.shopService.updateCartTotal(cart);
		this.sharedService.setCartTotalPrice(cartTotal.total);
		this.sharedService.setCartTotalQty(cartTotal.qty);
	}

}
