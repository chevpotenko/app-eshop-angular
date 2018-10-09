import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../services/data/data.service';
import { UserService } from '../../../../services/user/user.service';
import { User } from '../../../../class/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    public csrfToken: string;
    public err: string = '';

    constructor(private userService: UserService,                
                private dataService: DataService,
                private router: Router) {

    }   

    addUser($event, email, password) {
        $event.preventDefault(); 
        this.dataService.add('api/user/signup', {email, password} as User).subscribe(
            (user) => {       
                this.err = '';
                this.userService.setSignin(true);
                this.router.navigate(['/user/profile']);                
            },
            (err) => {
                this.err = Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message;
            } 
        );
    }
    
    ngOnInit() { 
        let getCookie = function(name) {
            let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) {
                return match[1];
            }
        }
        this.csrfToken =  getCookie('XSRF-TOKEN');
    }

}