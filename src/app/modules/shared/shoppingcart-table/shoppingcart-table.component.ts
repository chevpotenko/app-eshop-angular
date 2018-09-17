import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shoppingcart-table',
    templateUrl: './shoppingcart-table.component.html',
    styleUrls: ['./shoppingcart-table.component.css']
})
export class ShoppingcartTableComponent implements OnInit {

    @Input() shoppingcart: any;

    constructor() { }

    ngOnInit() {
    }

}
