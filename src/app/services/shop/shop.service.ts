import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class ShopService {

    public cart;

    constructor(private dataService: DataService,
                private sharedService: SharedService) {

        this.getCart().subscribe((result) => {
            this.cart = result;
        }); 
              
    }

    getCart() {
        return this.dataService.getAll('api/shoppingcart/');
    }
    
    updateCartTotal(cart) {		
		let result = cart.reduce((accumulator, item, index) => {
			return {
				total : accumulator.total += parseInt(item.total),
				qty : accumulator.qty += parseInt(item.qty)
			}			
        }, { total: 0, qty: 0 });
        this.sharedService.setCartTotalPrice(result.total);
        this.sharedService.setCartTotalQty(result.qty);
        return result;
    }

    updateCartItem (product, cart, itemCart, itemsAmount) {       
        cart.forEach((item, index) => {            
            if (item.product.id == product.id){
                itemCart.data = {
                    product: item.product,
                    id: item.id, 
                    qty: parseInt(item.qty) + parseInt(itemsAmount),
                    total: parseInt(item.total) + (parseInt(item.product.price) * parseInt(itemsAmount))
                };               				 
                itemCart.isItem = true;	               
                itemCart.index = index;	               
            }            		
        });
        return itemCart;               
    }
    
    addProductToCart(product, itemsAmount) {        
        let itemCart = {
            data: null,
            isItem: false,
            index: undefined
        };

        itemCart = this.updateCartItem(product, this.cart, itemCart, itemsAmount);			

        if (!itemCart.isItem){
            itemCart.data = {
                product: product,
                id: this.cart.length + 1, 
                qty: itemsAmount,
                total: parseInt(product.price) * parseInt(itemsAmount)
            }               
        }		

        if (itemCart.isItem){				
            this.dataService.update('api/shoppingcart/', itemCart.data.id, itemCart.data).subscribe(() => {
                this.cart.splice(itemCart.index, 1, itemCart.data);
                this.updateCartTotal(this.cart);
            });
        } else {                 
            this.dataService.add('api/shoppingcart/', itemCart.data).subscribe(() => {
                this.cart.push(itemCart.data);
                this.updateCartTotal(this.cart);
            });
        }	
    }
}
