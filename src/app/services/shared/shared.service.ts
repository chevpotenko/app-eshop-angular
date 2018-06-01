import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	public data = {
		cart: {
			totalQty: 0,
			totalPrice: 0
		},
		user: {
			signin: false
		}    
	};

	constructor() { }

	setCartTotalQty(amount){
		this.data.cart.totalQty = amount;
	}

	getCartTotalQty(){
		return this.data.cart.totalQty;
	}

	setCartTotalPrice(price){
		this.data.cart.totalPrice = price;
	}  

	getCartTotalPrice(){
		return this.data.cart.totalPrice;
	}

	setUserSignIn(signin){
		this.data.user.signin = signin;
	}  

	getUserSignIn(){
		return this.data.user.signin;
	}

}
