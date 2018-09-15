import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { contactRouting } from './contact.routing';
import { PageContactComponent } from './pages/contact/page-contact.component';

@NgModule({
    imports: [
        CommonModule,
        contactRouting
    ],
    declarations: [
      PageContactComponent
    ],
    exports: [ ]
})

export class PageContactModule { }