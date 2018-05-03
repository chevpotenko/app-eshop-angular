import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { GoodsService } from '../../services/goods/goods.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService]
})

export class HeaderComponent implements OnInit {
  
  public data;
  
  constructor(private sharedService: SharedService,
              private goodsService: GoodsService, 
              private userService: UserService) {
    this.data = this.sharedService.data;
  }

  ngOnInit() {
    this.goodsService.getShoppingCart().subscribe((result) => {      
      var cart:any = result; 
      this.sharedService.setCartTotalQty(cart.totalQty);
      this.sharedService.setCartTotalPrice(cart.totalPrice);
    });

    this.userService.isUserSignin().subscribe((result) => {      
      var state:any = result; 
      console.log(result);
      this.sharedService.setUserSignIn(state.signin);      
    });
    
  }

}
