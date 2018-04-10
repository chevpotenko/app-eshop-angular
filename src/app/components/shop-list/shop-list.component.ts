import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods/goods.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [GoodsService]
})
export class ShopListComponent implements OnInit {

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodsService.getGoods().subscribe((result) => {
      console.log(result)
    });
  }

}
