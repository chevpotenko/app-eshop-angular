import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageIndexComponent} from './pages/index/page-index.component';

export const routes: Routes = [
    {path: '', component: PageIndexComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IndexRouting {
}
