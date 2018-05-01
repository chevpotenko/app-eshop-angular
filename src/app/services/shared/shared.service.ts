import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  public data = {
    cart: {
      totalQty: 0,
      totalPrice: 0
    }    
  };

  constructor() { }

  setCartTotalQty(amount){
    this.data.cart.totalQty = amount;
  }

  setCartTotalPrice(price){
    this.data.cart.totalPrice = price;
  }

  getCartTotalQty(){
     return this.data.cart.totalQty;
  }

  getCartTotalPrice(){
     return this.data.cart.totalPrice;
  }

}
