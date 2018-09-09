import { Component,  OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
	selector: 'catalog-filter',
	templateUrl: './catalog-filter.component.html',
	styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {

	private params;
	private shownSections: Array<boolean> = [];

	constructor(private dataService: DataService,
				private sharedService: SharedService) {		
	}

	ngOnInit() {
		this.dataService.getAll('api/params/').subscribe(result => {
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
			this.sharedService.data.queryObj = this.sharedService.data.queryObj.set(event.target.name, event.target.value);
		} else {
			this.sharedService.data.queryObj = this.sharedService.data.queryObj.delete(event.target.name, event.target.value);
		}
		this.dataService.getQuery('api/shop', this.sharedService.data.queryObj).subscribe(result => { });
	}
}
