import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
    selector: 'app-page-about',
    templateUrl: './page-about.component.html',
    styleUrls: ['./page-about.component.css']
})
export class PageAboutComponent implements OnInit {

    public data = null;

    constructor(private dataService: DataService) {
        
    }

    ngOnInit() {
        this.dataService.getAll('api/pages/about').subscribe(result => {
            this.data = result;
        });        
    }

}
