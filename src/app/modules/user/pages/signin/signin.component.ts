import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data/data.service';
import { UserService } from '../../../../services/user/user.service';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
    constructor(private userService: UserService,
                private dataService: DataService,
                private authService: AuthService,
                private router: Router) {}

    ngOnInit() {}

    signin($event, username: string, password: string) {
        $event.preventDefault();
        this.authService.signin({ username, password }).subscribe( () => {
            this.router.navigate(['/user/profile']);
        });
        this.userService.setSignin(true);
    }
}
