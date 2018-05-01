import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { GoodsService } from '../../services/goods/goods.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  
  public data;
  
  constructor(private sharedService: SharedService,
              private goodsService: GoodsService) {
    this.data = this.sharedService.data;
  }

  ngOnInit() {
    this.goodsService.getShoppingCart().subscribe((result) => {      
      var cart:any = result; 
      this.sharedService.setCartTotalQty(cart.totalQty);
      this.sharedService.setCartTotalPrice(cart.totalPrice);
    }); 
  }

}
