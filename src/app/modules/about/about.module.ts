import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRouting } from './about.routing';
import { PageAboutComponent } from './pages/about/page-about.component';

@NgModule({
    imports: [
        CommonModule,
        AboutRouting
    ],
    declarations: [
        PageAboutComponent
    ]
})

export class PageAboutModule { }
