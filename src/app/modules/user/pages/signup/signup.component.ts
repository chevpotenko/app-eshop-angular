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
    
    ngOnInit() {
        this.csrfToken =  this.userService.getCookie('XSRF-TOKEN'); 
    }

    addUser($event, email, password) {
        $event.preventDefault(); 
        this.dataService.add('api/users', {email, password} as User).subscribe(
            (user) => {      
                this.err = '';
                this.userService.setSignin(true);
                this.router.navigate(['/user/profile']); 
            },
            (err) => {
                if(err.error) {
                    this.err = Array.isArray(err.error.message) ? err.error.message.join(', ') : err.error.message;                    
                } else {
                    this.err = err.body.error;
                }
            } 
        );
    }
}