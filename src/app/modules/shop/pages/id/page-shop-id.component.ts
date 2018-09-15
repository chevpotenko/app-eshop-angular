import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-shop-id',
    templateUrl: './page-shop-id.component.html',
    styleUrls: ['./page-shop-id.component.css']
})
export class PageShopIdComponent implements OnInit {

    public product;
    public quantity;

    constructor(private dataService: DataService,
                private shopService: ShopService,
                private route: ActivatedRoute) {
        this.quantity = 0;
    }

    ngOnInit() {
        let productId = this.route.snapshot.paramMap.get('id');
        this.dataService.getSingle('api/shop/', productId).subscribe((result) => {
            this.product = result;
        });
    }

    addToCart(product) {	
		this.shopService.addProductToCart(product, this.quantity);
	}

}