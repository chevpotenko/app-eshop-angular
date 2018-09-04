import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

    private isSubscribed:boolean = false;
    private isOverlay:boolean = false;


    constructor( private dataService: DataService,
                private renderer: Renderer2) { 

    }

    subscribe(event, elForm, elEmail) {
        event.preventDefault();
        if(this.isSubscribed) { return };                  
        this.dataService.add('api/subscribers', {email: elEmail.value}).subscribe(() => {
            this.isSubscribed = true;
            this.isOverlay = true;
            elForm.resetForm();
            this.renderer.addClass(document.body, 'is-overlay');
        });              
    }

    toggleOverlay() {
        this.isOverlay = !this.isOverlay;
        this.renderer.removeClass(document.body, 'is-overlay');
    }

    ngOnInit() {
        
    }

}
