import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  @Input() productId: string;
  public images;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSingle(`${environment.apiUrl}api/productimages/`, this.productId).subscribe((result) => {
      this.images = result;
    });
  }
}
