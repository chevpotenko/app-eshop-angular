import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRouting } from './contact.routing';
import { PageContactComponent } from './pages/contact/page-contact.component';

@NgModule({
    imports: [
        CommonModule,
        ContactRouting
    ],
    declarations: [ PageContactComponent ],
    exports: []
})

export class PageContactModule { }
