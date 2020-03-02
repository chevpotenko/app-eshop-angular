import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { environment } from '../../../../../environments/environment';
import { Product } from '../../../../class/product';
import { CartItem } from '../../../../class/cart';

@Component({
    selector: 'app-page-shop-id',
    templateUrl: './page-shop-id.component.html',
    styleUrls: ['./page-shop-id.component.css']
})
export class PageShopIdComponent implements OnInit {
    public selectedSize: string;
    public selectedColor: string;
    public cart: CartItem[];
    public cartItemId: number;
    public product: Product;
    public qty = 1;
    public galleryImages: NgxGalleryImage[];
    public galleryOptions: NgxGalleryOptions[] = [
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

    constructor(private dataService: DataService,
                private shopService: ShopService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {}

    async ngOnInit() {
        const productId = this.activatedRoute.snapshot.paramMap.get('id');
        await this.dataService
            .getSingle(`${environment.apiUrl}api/products/`, productId)
            .subscribe((result: Product) => {
                this.product = result;
                this.galleryImages = this.createGalleryImages(result);
                this.getCart();
                this.cartItemId = this.getCartItemId();
            });
    }

    createGalleryImages(product) {
        return product.images.map(img => {
            return {
                small: `${environment.apiUrl}assets/img/products/small/${img}`,
                medium: `${environment.apiUrl}assets/img/products/medium/${img}`,
                big: `${environment.apiUrl}assets/img/products/big/${img}`
            };
        });
    }

    addToCart(product) {
        const cartItem = this.setCartItem(product);
        this.shopService.addProductToCart(cartItem);
    }

    buyNow(product) {
        this.addToCart(product);
        this.router.navigate(['/checkout']);
    }

    onSelectSize(size: string) {
        this.selectedSize = size;
    }

    onSelectColor(color: string) {
        this.selectedColor = color;
    }

    getCart() {
        this.shopService.getCart.subscribe( result => {
            this.cart = result;
        });
    }

    getCartItemId() {
        const cartItem = this.cart.find(item => item.product.id === this.product.id);
        return cartItem ? cartItem.id : this.cart.length + 1;
    }

    setCartItem({ id, name, price }) {
        return {
            id: this.cartItemId,
            product: {
                id,
                name,
                price,
                size: this.selectedSize,
                color: this.selectedColor,
                qty: this.qty,
                total: this.qty * price
            }
        };
    }
}
