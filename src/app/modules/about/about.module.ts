import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutRouting } from './about.routing';
import { PageAboutComponent } from './pages/about/page-about.component';

@NgModule({
    imports: [
        CommonModule,
        aboutRouting
    ],
    declarations: [
        PageAboutComponent
    ],
    exports: [ ]
})

export class PageAboutModule { }
