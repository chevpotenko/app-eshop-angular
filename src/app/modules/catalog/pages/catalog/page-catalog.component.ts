import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../services/shared/shared.service';
import { DataService } from '../../../../services/data/data.service';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {
   
    private filterCategories = {
        categories: false,
        price: false,        
        size: false,
        brand: false,
        color: false
    };
    private products;
    private data;

    constructor(private route: ActivatedRoute,
                private sharedService: SharedService,
                private dataService: DataService) {
        this.data = this.sharedService.data;
    }
    
    toggleParam(name){
        for (let category in this.filterCategories){           
            this.filterCategories[category] = (name !== category) ? false : true; 
        }
    }

    getCategoryName(){
        return this.route.snapshot.routeConfig.path;
    }

    ngOnInit() {
        this.dataService.getAll('api/shop/').subscribe((result) => {
            this.products = result;
            if(this.products){
                this.sharedService.setCurrentCategory(this.products[0].category);
            }  
        });
    }

}
