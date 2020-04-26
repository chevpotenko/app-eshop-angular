import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { Product } from '../../../../class/product';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-page-index',
    templateUrl: './page-index.component.html',
    styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {
    public products$: Observable<Product[]>;

    constructor(private dataService: DataService) {}

     ngOnInit() {
        this.products$ = this.dataService.getAll<Product[]>(`${environment.apiUrl}api/products`);
    }
}
