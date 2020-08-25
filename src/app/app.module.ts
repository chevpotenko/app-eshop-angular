import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';

import { SharedModule } from './modules/shared/shared.module';
import { PageIndexModule } from './modules/index/index.module';
import { ShopModule } from './modules/shop/shop.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ProfileGuardService } from './services/profile-guard/profile-guard.service';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './modules/shoppingcart/pages/shoppingcart/shopping-cart.component';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingCartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
        environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        SharedModule,
        ShopModule,
        PageIndexModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        HttpClientModule,
        AuthGuardService,
        ProfileGuardService,
        AuthService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
