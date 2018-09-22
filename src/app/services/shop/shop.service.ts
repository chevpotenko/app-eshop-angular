import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
export class ShopService {

    public cart;
    public orderTotal = {
        price: 0,
        quantity: 0
    };

    constructor(private dataService: DataService) {
        this.getCart().subscribe((result) => {
            this.cart = result;
            this.getOrderTotal();
        });  
    }

    getCart() {
        return this.dataService.getAll('api/shoppingcart/');
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
                this.getOrderTotal();
            });
        } else {                 
            this.dataService.add('api/shoppingcart/', itemCart.data).subscribe(() => {
                this.cart.push(itemCart.data);
                this.getOrderTotal();
            });
        }	
    }

    getOrderTotal() {
        this.orderTotal.price = this.cart.reduce((accum, current) => { return accum + current.total }, 0);
        this.orderTotal.quantity = this.cart.reduce((accum, current) => { return accum + current.qty }, 0);
    }
}
