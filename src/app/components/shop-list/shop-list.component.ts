import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../../services/goods/goods.service';
import { Goods } from '../../class/goods';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [GoodsService]
})
export class ShopListComponent implements OnInit {

  public goods: Goods[];

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodsService.getGoods().subscribe((result) => {
      this.goods = result;
    });
  }

}
