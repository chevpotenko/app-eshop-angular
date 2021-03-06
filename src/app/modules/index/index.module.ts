import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { IndexRouting } from './index.routing';

import { PageIndexComponent } from './pages/index/page-index.component';
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
        IndexRouting
    ],
    declarations: [
        PageIndexComponent,
        AdviceComponent,
        SubscriptionComponent,
        MainBannerComponent,
        BrandsComponent,
        ArticlesComponent
    ]
})

export class PageIndexModule { }
