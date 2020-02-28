import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data/data.service';
import { UserService } from '../../../../services/user/user.service';
import { User } from '../../../../class/user';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
    public csrfToken: string;
    public err = '';

    constructor(private userService: UserService,
                private dataService: DataService,
                private router: Router) {}

    ngOnInit() {
        this.csrfToken =  this.userService.getCookie('XSRF-TOKEN');
    }

    signinUser($event, email, password) {
        $event.preventDefault();
        this.dataService
            .getQuery(`${environment.apiUrl}api/users`, { email, password } as User)
            .subscribe(
                (user) => {
                    this.err = '';
                    this.userService.setSignin(true);
                    this.router.navigate(['/user/profile']);
                },
                (err) => {
                    if (err.error) {
                        this.err = Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message;
                    } else {
                        this.err = err.body.error;
                    }
                }
            );
    }
}
