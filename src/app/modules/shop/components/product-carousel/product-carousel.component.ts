import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';

@Component({
	selector: 'product-carousel',
	templateUrl: './product-carousel.component.html',
	styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {

	@Input() productId: string;
	private images; 

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getSingle('api/productimages/', this.productId).subscribe((result) => {
			this.images = result;
		});
	}
}
