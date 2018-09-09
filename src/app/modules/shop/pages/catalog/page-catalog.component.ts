import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared/shared.service';
import { DataService } from '../../../../services/data/data.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {   
    
    private products;
    private data;
    public queryObj: HttpParams;

    constructor(private sharedService: SharedService,
                private dataService: DataService) {
        this.data = this.sharedService.data;
        this.queryObj = new HttpParams();
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
