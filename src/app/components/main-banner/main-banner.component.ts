import { Component, OnInit } from '@angular/core';
import { MainBannerService } from '../../services/main-banner/main-banner.service';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css'],
  providers: [MainBannerService],
})
export class MainBannerComponent implements OnInit {

  constructor(private mainBannerService: MainBannerService) { }

  ngOnInit() {
    this.mainBannerService.getMainBanner().subscribe((result) => {
      console.log(result)
    });
  }

}
