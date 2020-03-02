import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../class/product';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {
    @Input() list: Product[];
    public basePath: string = environment.apiUrl;
    constructor() {}
    ngOnInit() {}
}
