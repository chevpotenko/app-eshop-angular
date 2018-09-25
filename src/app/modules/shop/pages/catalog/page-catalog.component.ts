import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { Category } from '../../../../class/category';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {   
    
    private catalog;
    private products;
    private currentCategoryId;
    private currentCategoryName;    

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
      
    }

    ngOnInit() {
        this.dataService.getAll('api/shop/').subscribe((result) => {
            this.products = result;
        });
        this.getCurrentCategoryId();
        this.getCatalog();       
    }

    getCatalog() {
        this.dataService.getAll<Category[]>('api/catalog/').subscribe((catalog) => {
            this.catalog = catalog
            this.currentCategoryName = this.getCurrentCategoryName();
        });
    }

    getCurrentCategoryName(){
        let currentCategory = this.catalog.find(category => {
           return category.id === parseInt(this.currentCategoryId) ? true : false;
        });
        return currentCategory.name;
    }

    getCurrentCategoryId() {
        this.activatedRoute.params.subscribe(params => {
            if(this.catalog){
                this.currentCategoryId = params['id'];
                this.currentCategoryName = this.getCurrentCategoryName();
            } else {
                this.currentCategoryId = params['id'];
            }          
        });
    }
}