import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class PageCheckoutComponent implements OnInit {
	
    public shoppingcart;

	constructor(private route: ActivatedRoute) {

	}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.shoppingcart = [{
				product: {
					id: 1,
					name: params.name,
					category: "",
					price: params.price,
					rating: "",
					discount: "",
					img: ""
				},
				id: 1,
				qty: params.quantity,
				total: parseInt(params.quantity) * parseInt(params.price)
			}];
		})
		
	}
}
