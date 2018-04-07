import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { AdviceComponent } from './components/advice/advice.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AppRoutingModule } from './app-routing.module';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';
import { PageIndexComponent } from './components/page-index/page-index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopListComponent,
    AdviceComponent,
    SubscriptionComponent,
    MainBannerComponent,
    BrandsComponent,
    ArticlesComponent,
    PageCatalogComponent,
    PageIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
