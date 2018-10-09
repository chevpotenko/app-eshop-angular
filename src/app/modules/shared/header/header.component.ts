import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { UserService } from '../../../services/user/user.service';
import { ShopService } from '../../../services/shop/shop.service';
import { Signin } from '../../../class/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
    public signin;
    public orderTotal;
    public catalog;
    
    constructor(private dataService: DataService, 
                private shopService: ShopService,   
                private userService: UserService) {

    }

    ngOnInit() {
        this.userService.signin.subscribe( result => {
            this.signin = result;
        });

        this.shopService.orderTotal.subscribe( result => {
            this.orderTotal = result;
        });

        this.dataService.getAll('api/catalog').subscribe( result => { 
            this.catalog = result;            
        });

        this.dataService.getSingle('api/user/', 'signin').subscribe( (result:Signin) => {
            this.userService.setSignin(result.signin);
        });
    }

}
