import { Injectable } from '@angular/core';

@Injectable()
export class ShopService {

    constructor() { }

    updateCartTotal(cart) {		
		let result = cart.reduce((accumulator, item, index) => {
			return {
				total : accumulator.total += parseInt(item.total),
				qty : accumulator.qty += parseInt(item.qty)
			}			
		}, { total: 0, qty: 0 });
		return result;
    }

}
