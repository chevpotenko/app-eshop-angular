import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {
   
    filterCategories = {
        categories: false,
        price: false,        
        size: false,
        brand: false,
        color: false
    };

    categoryName:string = ''; 

    constructor(private route: ActivatedRoute) { }
    
    toggleParam(name){
        for (let category in this.filterCategories){           
            this.filterCategories[category] = (name !== category) ? false : true; 
        }
    }

    getCategoryName(){
        return this.route.snapshot.routeConfig.path;
    }

    ngOnInit() {
        this.categoryName = this.getCategoryName();
    }


}
