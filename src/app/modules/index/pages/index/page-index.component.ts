import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { Product } from '../../../../class/product';

@Component({
    selector: 'app-page-index',
    templateUrl: './page-index.component.html',
    styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

    private products: Product[];

    constructor(private dataService: DataService) { 
        
    }

     ngOnInit() {
        this.dataService.getAll<Product[]>('api/shop/').subscribe((result) => {
            this.products = result;
        });
    }

}
