import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShoppingcartTableComponent } from './shoppingcart-table/shoppingcart-table.component';

@NgModule({
    declarations: [
        ShopListComponent,
        ShoppingcartTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ShopListComponent,
        ShoppingcartTableComponent
    ]
})
export class SharedModule { }
