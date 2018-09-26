import { Component,  OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';

@Component({
	selector: 'catalog-filter',
	templateUrl: './catalog-filter.component.html',
	styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {

	private params;
	private shownSections: Array<boolean> = [];

	constructor(private dataService: DataService,
				private httpParamsService: HttpParamsService) {		
	}

	ngOnInit() {
		this.dataService.getAll('api/productparams/').subscribe(result => {
			this.params = result;
			this.params.forEach((element, index)=> {
				this.shownSections[index] = false;
			});
        });
	}

	toggleSection(id) {
		this.shownSections.forEach((value, index) => {
			this.shownSections[index] = id === index ? !value : value;
		});
	}

	getData(event) {
		if (event.target.checked) {
			this.httpParamsService.httpParams = this.httpParamsService.httpParams.set(event.target.name, event.target.value);
			this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', '0');
		} else {
			this.httpParamsService.httpParams = this.httpParamsService.httpParams.delete(event.target.name, event.target.value);
			this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', '0');
		}
		this.dataService.getQuery('api/shop', this.httpParamsService.httpParams).subscribe(result => { });
	}
}
