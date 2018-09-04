import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user/user.service';
import { SharedService } from '../../../../services/shared/shared.service';
import { User } from '../../../../class/user';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    providers: [UserService]
})
export class SigninComponent implements OnInit {  

    public csrfToken:string;
    public err:string = '';

    constructor(private userService: UserService,
                private router: Router,
                private sharedService: SharedService) {

    }

    signinUser($event, email, password) {
        $event.preventDefault(); 
        this.userService.signinUser({email, password} as User).subscribe(
            (user) => {   
                this.err = '';
                this.router.navigate(['/user/profile']);
                this.sharedService.setUserSignIn(true);
            },
            (err) => {
                if(Array.isArray(err.error.message)){
                    this.err = err.error.message.join(', ');
                }else{          
                    this.err = err.error.message;
                }               
            } 
        );
    }
    
    ngOnInit() { 
        var getCookie = function(name) {
            var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) {
                return match[1];
            }
        }
        this.csrfToken =  getCookie('XSRF-TOKEN');
    }
}
