import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageIndexComponent } from './modules/index/pages/index/page-index.component';
import { PageCatalogComponent } from './modules/shop/pages/catalog/page-catalog.component';
import { PageShopIdComponent } from './modules/shop/pages/id/page-shop-id.component';
import { SignupComponent } from './modules/user/pages/signup/signup.component';
import { SigninComponent } from './modules/user/pages/signin/signin.component';
import { ProfileComponent } from './modules/user/pages/profile/profile.component';
import { ShoppingCartComponent } from './modules/shoppingcart/pages/shoppingcart/shopping-cart.component';


const routes: Routes = [
    { path: 'catalog', component: PageCatalogComponent }, 
    { path: 'catalog/:id', component: PageCatalogComponent }, 
    { path: 'shop/:id', component: PageShopIdComponent },  
    { path: 'user/signup', component: SignupComponent },
    { path: 'user/signin', component: SigninComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'checkout', loadChildren: './modules/checkout/checkout.module#PageCheckoutModule' },
    { path: 'contact', loadChildren: './modules/contact/contact.module#PageContactModule' },
    { path: 'about', loadChildren: './modules/about/about.module#PageAboutModule' },
    { path: '', component: PageIndexComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
