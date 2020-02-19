import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

import { UserService } from './services/user/user.service';
import { DataService } from './services/data/data.service';
import { ShopService } from './services/shop/shop.service';


import { SharedModule } from './modules/shared/shared.module';
import { PageIndexModule } from './modules/index/index.module';
import { ShopModule } from './modules/shop/shop.module';

import { ShoppingCartComponent } from './modules/shoppingcart/pages/shoppingcart/shopping-cart.component';
import { SignupComponent } from './modules/user/pages/signup/signup.component';
import { SigninComponent } from './modules/user/pages/signin/signin.component';
import { ProfileComponent } from './modules/user/pages/profile/profile.component';

import { AppComponent } from './app.component';

import { routing } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		ProfileComponent,
		SigninComponent,
		ShoppingCartComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		SharedModule,
		PageIndexModule,
		ShopModule,
		routing,
		HttpModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers: [
		HttpClientModule,
		DataService,
		UserService,
		ShopService
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}
