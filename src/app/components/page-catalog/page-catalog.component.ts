import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-page-catalog',
    templateUrl: './page-catalog.component.html',
    styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {
    @ViewChild("tref", {read: ElementRef}) tref: ElementRef;

    filterCategories = {
        categories: false,
        price: false,        
        size: false,
        brand: false,
        colour: false
    };
    constructor(protected elementRef: ElementRef) { }
    
    toggleCategory(name){
        for (let category in this.filterCategories){           
            this.filterCategories[category] = (name !== category) ? false : true; 
        }
    }

    ngOnInit() {
    }

}
