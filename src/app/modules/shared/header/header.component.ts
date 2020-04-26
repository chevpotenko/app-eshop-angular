import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { UserService } from '../../../services/user/user.service';
import { ShopService } from '../../../services/shop/shop.service';
import { AuthService } from '../../../services/auth/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    public isSignin$;
    public orderTotal$;
    public catalog$;

    constructor(private dataService: DataService,
                private shopService: ShopService,
                private authService: AuthService,
                private userService: UserService) {}

    ngOnInit() {
        const isSignin = this.authService.isLoggedIn();
        this.userService.setSignin(isSignin);
        this.isSignin$ = this.userService.getSignin;
        this.orderTotal$ = this.shopService.orderTotal;
        this.catalog$ = this.dataService.getAll(`${environment.apiUrl}api/catalogs`);
    }

    logOut() {
        this.authService.logout();
        this.userService.setSignin(false);
    }
}
