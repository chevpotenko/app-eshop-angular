import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { indexRouting } from './index.routing';

import { PageIndexComponent } from './pages/index/page-index.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AdviceComponent } from './components/advice/advice.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ArticlesComponent } from './components/articles/articles.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,        
        SharedModule,
        indexRouting
    ],
    declarations: [
        PageIndexComponent,
        HeaderComponent,
        FooterComponent,
        AdviceComponent,
        SubscriptionComponent,
        MainBannerComponent,
        BrandsComponent,
        ArticlesComponent
    ],
    exports: [       
        HeaderComponent,
        FooterComponent
    ]
})

export class PageIndexModule { }
