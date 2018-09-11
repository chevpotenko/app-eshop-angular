import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';

@Component({
	selector: 'catalog-pagination',
	templateUrl: './catalog-pagination.component.html',
	styleUrls: ['./catalog-pagination.component.css']
})
export class CatalogPaginationComponent implements OnInit {

	private pages: Array<number> = [1, 2, 3, 4, 5];

	constructor(private dataService: DataService,
				private httpParamsService: HttpParamsService) {		
	}

	ngOnInit() {
	}

	goToPage(pageNumber) {
		this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', pageNumber);
		this.dataService.getQuery('api/shops',this.httpParamsService.httpParams).subscribe(result => { });		
	}

}
