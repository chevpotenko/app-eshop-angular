import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageContactComponent } from './pages/contact/page-contact.component';

const routes: Routes = [
    { path: '', component: PageContactComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export  class ContactRouting {}
