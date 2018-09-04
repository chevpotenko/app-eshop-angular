import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-shop-id',
    templateUrl: './page-shop-id.component.html',
    styleUrls: ['./page-shop-id.component.css']
})
export class PageShopIdComponent implements OnInit {

    public product;

    constructor(private dataService: DataService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        let productId = this.route.snapshot.paramMap.get('id');
        this.dataService.getSingle('api/goods/', productId).subscribe((result) => {
            this.product = result;
        });
    }

}