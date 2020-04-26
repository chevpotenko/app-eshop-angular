import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/data/data.service';
import {HttpParamsService} from '../../../../services/http-params/http-params.service';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-catalog-filter',
    templateUrl: './catalog-filter.component.html',
    styleUrls: ['./catalog-filter.component.css']
})
export class CatalogFilterComponent implements OnInit {
    public params$;

    constructor(private dataService: DataService,
                private httpParamsService: HttpParamsService) {
    }

    ngOnInit() {
        this.params$ = this.dataService.getAll(`${environment.apiUrl}api/filters`);
    }

    toggleSection(event) {
        event.currentTarget.classList.toggle('active');
    }

    getData(event) {
        if (event.target.checked) {
            this.httpParamsService.httpParams = this.httpParamsService.httpParams.set(event.target.name, event.target.value);
            this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', '0');
        } else {
            this.httpParamsService.httpParams = this.httpParamsService.httpParams.delete(event.target.name, event.target.value);
            this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', '0');
        }
        this.dataService
            .getQuery(`${environment.apiUrl}api/products`, this.httpParamsService.httpParams)
            .subscribe(result => {});
    }
}
