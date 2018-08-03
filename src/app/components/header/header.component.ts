import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { DataService } from '../../services/data/data.service';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
    public data;
    
    constructor(private sharedService: SharedService,
                private dataService: DataService, 
                private userService: UserService) {
        this.data = this.sharedService.data;
    }

    ngOnInit() {
        this.dataService.getAll('api/shoppingcart').subscribe((result) => {      
            var cart:any = result; 
            this.sharedService.setCartTotalQty(cart.totalQty);
            this.sharedService.setCartTotalPrice(cart.totalPrice);
        });

        this.userService.isUserSignin().subscribe((result) => {      
            var state:any = result; 
            this.sharedService.setUserSignIn(state.signin);      
        });        
    }

}
