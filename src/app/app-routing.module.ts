import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './components/page-index/page-index.component';
import { PageCatalogComponent } from './components/page-catalog/page-catalog.component';

const routes: Routes = [  
  { path: 'catalog', component: PageCatalogComponent},  
  { path: '', component: PageIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
