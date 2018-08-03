import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Banner } from '../../class/banner';

@Component({
    selector: 'app-main-banner',
    templateUrl: './main-banner.component.html',
    styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent implements OnInit {

    public banners;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.getAll('api/banners').subscribe((result) => {
            this.banners = result;
        });
    }
}
