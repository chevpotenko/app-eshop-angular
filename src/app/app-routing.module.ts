import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './modules/index/pages/index/page-index.component';
import { PageCatalogComponent } from './modules/shop/pages/catalog/page-catalog.component';
import { PageShopIdComponent } from './modules/shop/pages/id/page-shop-id.component';
import { SignupComponent } from './modules/user/pages/signup/signup.component';
import { SigninComponent } from './modules/user/pages/signin/signin.component';
import { ProfileComponent } from './modules/user/pages/profile/profile.component';
import { ShoppingCartComponent } from './modules/shoppingcart/pages/shoppingcart/shopping-cart.component';
import { PageAboutComponent } from './modules/about/pages/about/page-about.component';
import { PageContactComponent } from './modules/contact/pages/contact/page-contact.component';


const routes: Routes = [
    { path: 'catalog', component: PageCatalogComponent }, 
    { path: 'catalog/:id', component: PageCatalogComponent }, 
    { path: 'shop/:id', component: PageShopIdComponent },  
    { path: 'user/signup', component: SignupComponent },
    { path: 'user/signin', component: SigninComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: 'shoppingcart', component: ShoppingCartComponent },
    { path: 'about', component: PageAboutComponent },
    { path: 'contact', component: PageContactComponent },
    { path: '', component: PageIndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
