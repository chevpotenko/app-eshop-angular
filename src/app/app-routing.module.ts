import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './components/page-index/page-index.component';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ProfileComponent } from './components/user/profile/profile.component';


const routes: Routes = [  
  { path: 'catalog', component: PageCatalogComponent},  
  { path: 'user/signup', component: SignupComponent},
  { path: 'user/signin', component: SigninComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: '', component: PageIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
