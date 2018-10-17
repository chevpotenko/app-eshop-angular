import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-shop-id',
    templateUrl: './page-shop-id.component.html',
    styleUrls: ['./page-shop-id.component.css']
})
export class PageShopIdComponent implements OnInit {

    public product;
    public quantity;
    private selectedSize: string;
    private selectedColor: string;

    constructor(private dataService: DataService,
                private shopService: ShopService,
                private activatedRoute: ActivatedRoute,
                private router: Router,) {
        this.quantity = 1;
    }

    ngOnInit() {
        let productId = this.activatedRoute.snapshot.paramMap.get('id');
        this.dataService.getSingle('api/shop/', productId).subscribe((result) => {
            this.product = result;
        });
    }

    addToCart(product) {	
		this.shopService.addProductToCart(product, this.quantity);
    }
    
    buyNow(product) {
        this.shopService.addProductToCart(product, this.quantity);
        this.router.navigate(['/checkout']);
    }

    onSelectSize(size:string) {
        this.selectedSize = size;
    }

    onSelectColor(color:string) {
        this.selectedColor = color;
    }

}