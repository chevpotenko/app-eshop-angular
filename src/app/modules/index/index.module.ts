import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';

import { PageIndexComponent } from './pages/index/page-index.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ShopListComponent } from '../../shared/shop-list/shop-list.component';
import { AdviceComponent } from './components/advice/advice.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        PageIndexComponent,
        HeaderComponent,
        FooterComponent,
        ShopListComponent,
        AdviceComponent,
        SubscriptionComponent,
        MainBannerComponent,
        BrandsComponent,
        ArticlesComponent
    ],
    exports: [
        PageIndexComponent,
        HeaderComponent,
        FooterComponent,
        ShopListComponent,
        AdviceComponent,
        SubscriptionComponent,
        MainBannerComponent,
        BrandsComponent,
        ArticlesComponent        	
    ]
})

export class PageIndexModule { }
