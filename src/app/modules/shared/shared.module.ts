import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShoppingcartTableComponent } from './shoppingcart-table/shoppingcart-table.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ShopListComponent,
        ShoppingcartTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ShopListComponent,
        ShoppingcartTableComponent
    ]
})

export class SharedModule { }
