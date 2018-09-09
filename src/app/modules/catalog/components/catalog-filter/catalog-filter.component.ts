import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DataService } from '../../../../services/data/data.service';

@Component({
	selector: 'catalog-filter',
	templateUrl: './catalog-filter.component.html',
	styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {

	private params: Array<object>;
	private queryObj: HttpParams;
	private shownSections: Array<boolean> = [];

	constructor(private dataService: DataService) {
		this.queryObj = new HttpParams();
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
			this.queryObj = this.queryObj.set(event.target.name, event.target.value);
		} else {
			this.queryObj = this.queryObj.delete(event.target.name, event.target.value);
		}
		this.dataService.getQuery('api/shtop', this.queryObj).subscribe(result => { });
	}
}
