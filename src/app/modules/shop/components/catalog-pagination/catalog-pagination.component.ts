import { Component } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-catalog-pagination',
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.css']
})
export class CatalogPaginationComponent {
  public pages: Array<number> = [1, 2, 3, 4, 5];

  constructor(private dataService: DataService,
        private httpParamsService: HttpParamsService) {}

  goToPage(pageNumber) {
    this.httpParamsService.httpParams = this.httpParamsService.httpParams.set('page', pageNumber);
    this.dataService.getQuery(`${environment.apiUrl}api/products`, this.httpParamsService.httpParams).subscribe(result => { });
  }
}
