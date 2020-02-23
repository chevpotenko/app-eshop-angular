import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { Category } from '../../../../class/category';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {
    private catalog;
    private currentCategoryId;
    public products;
    public currentCategoryName;

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.dataService.getAll(`${environment.apiUrl}api/products`).subscribe((result) => {
            this.products = result;
        });
        this.getCurrentCategoryId();
        this.getCatalog();
    }

    getCatalog() {
        this.dataService.getAll<Category[]>(`${environment.apiUrl}api/catalogs`).subscribe((catalog) => {
            this.catalog = catalog;
            this.currentCategoryName = this.getCurrentCategoryName();
        });
    }

    getCurrentCategoryName() {
        const currentCategory = this.catalog.find(category => {
           return category.id === parseInt(this.currentCategoryId, 10);
        });
        return currentCategory.name;
    }

    getCurrentCategoryId() {
        this.activatedRoute.params.subscribe(params => {
            if (this.catalog) {
                this.currentCategoryId = params['id'];
                this.currentCategoryName = this.getCurrentCategoryName();
            } else {
                this.currentCategoryId = params['id'];
            }
        });
    }
}
