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
		},
		currentCategory: ""		
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

	getcurrentCategory(){
		return this.data.currentCategory;
	}

	getCartTotalPrice(){
		return this.data.cart.totalPrice;
	}

	getUserSignIn(){
		return this.data.user.signin;
	}

	setUserSignIn(signin){
		this.data.user.signin = signin;
	}

	setCurrentCategory(category){
		this.data.currentCategory	 = category;
	}

}
