import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-page-shop-id',
    templateUrl: './page-shop-id.component.html',
    styleUrls: ['./page-shop-id.component.css']
})
export class PageShopIdComponent implements OnInit {

    public product;
    public productImages;
    public quantity;
    private selectedSize: string;
    private selectedColor: string;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private dataService: DataService,
                private shopService: ShopService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.quantity = 1;
    }

    ngOnInit() {

        const productId = this.activatedRoute.snapshot.paramMap.get('id');
        this.dataService.getSingle(`${environment.apiUrl}api/products/`, productId).subscribe((result) => {
            this.product = result;
        });
        this.dataService.getSingle(`${environment.apiUrl}api/productimages/`, productId).subscribe((result) => {
            this.productImages = result;
        });

        this.galleryOptions = [
            {
                width: '100%',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
    }

    addToCart(product) {
      this.shopService.addProductToCart(product, this.quantity);
    }

    buyNow(product) {
        this.shopService.addProductToCart(product, this.quantity);
        this.router.navigate(['/checkout']);
    }

    onSelectSize(size: string) {
        this.selectedSize = size;
    }

    onSelectColor(color: string) {
        this.selectedColor = color;
    }

}
