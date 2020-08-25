import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './pages/shoppingcart/shopping-cart.component';
import { ShoppingcartRouting } from './shoppingcart.routing';

@NgModule({
  imports: [
      SharedModule,
      ShoppingcartRouting
  ],
  declarations: [ShoppingCartComponent],
})

export class PageShoppingcartModule { }
