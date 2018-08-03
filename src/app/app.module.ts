import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { UserService } from './services/user/user.service';
import { SharedService } from './services/shared/shared.service';
import { DataService } from './services/data/data.service';

import { PageIndexModule } from './modules/page-index/page-index.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { PageIndexComponent } from './components/page-index/page-index.component';
import { PageAboutComponent } from './components/page-about/page-about.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageShopIdComponent } from './components/page-shop-id/page-shop-id.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ShoppingCartComponent } from './components//shopping-cart/shopping-cart.component';

@NgModule({
	declarations: [
		AppComponent,		
		PageCatalogComponent,
		PageIndexComponent,
		PageAboutComponent,
		PageContactComponent,
		PageShopIdComponent,
		SignupComponent,
		ProfileComponent,
		SigninComponent,
		ShoppingCartComponent		
	],
	imports: [
		BrowserModule,
		FormsModule,		
		AppRoutingModule,
		PageIndexModule,
		HttpModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService
		)		
	],
	providers: [HttpClientModule, SharedService, DataService, UserService],
	bootstrap: [AppComponent]
})


export class AppModule {

}