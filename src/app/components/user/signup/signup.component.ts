import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { SharedService } from '../../../services/shared/shared.service';
import { User } from '../../../class/user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [UserService]
})


export class SignupComponent implements OnInit {

    public csrfToken:string;
    public err:string = '';

    constructor(private userService: UserService,
                private router: Router,
                private sharedService: SharedService) {

    }   

    addUser($event, email, password) {
        $event.preventDefault(); 
        this.userService.addUser({email, password} as User).subscribe(
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
        let getCookie = function(name) {
            let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) {
                return match[1];
            }
        }
        this.csrfToken =  getCookie('XSRF-TOKEN');
    }

}