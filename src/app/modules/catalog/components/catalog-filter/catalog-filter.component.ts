import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'catalog-filter',
	templateUrl: './catalog-filter.component.html',
	styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {

	private filterCategories = {
		categories: false,
		price: false,        
		size: false,
		brand: false,
		color: false
	};

	constructor() { }

	ngOnInit() {
	}

	toggleParam(name){
		for (let category in this.filterCategories){           
			this.filterCategories[category] = (name !== category) ? false : true; 
		}
	}

}
