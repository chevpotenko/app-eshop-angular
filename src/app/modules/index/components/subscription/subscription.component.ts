import { Component, Renderer2 } from '@angular/core';
import { DataService } from '../../../../services/data/data.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
    private isSubscribed = false;
    public isOverlay = false;

    constructor( private dataService: DataService,
                private renderer: Renderer2) {}

    subscribe(event, elForm, elEmail) {
        event.preventDefault();
        if (this.isSubscribed) { return; }
        this.dataService
            .add(`${environment.apiUrl}api/subscribers`, { email: elEmail.value })
            .subscribe(() => {
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
}
