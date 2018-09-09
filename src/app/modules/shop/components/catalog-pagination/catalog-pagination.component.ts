import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
	selector: 'catalog-pagination',
	templateUrl: './catalog-pagination.component.html',
	styleUrls: ['./catalog-pagination.component.css']
})
export class CatalogPaginationComponent implements OnInit {

	private pages: Array<number> = [1, 2, 3, 4, 5];

	constructor(private dataService: DataService,
				private sharedService: SharedService) {		
	}

	ngOnInit() {
	}

	goToPage(pageNumber) {
		this.sharedService.data.queryObj = this.sharedService.data.queryObj.set('page', pageNumber);
		this.dataService.getQuery('api/shop', this.sharedService.data.queryObj).subscribe(result => { });
		
	}

}
