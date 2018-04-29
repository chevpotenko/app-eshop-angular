import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../class/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {  
  public csrfToken:string;
  public err:string = '';

  constructor(private userService: UserService, private router: Router) { }

  signinUser($event, email, password) {
    $event.preventDefault(); 
    this.userService.signinUser({email, password} as User).subscribe(
      (user) => { 
        console.log('post new user', user);       
        this.err = '';
        this.router.navigate(['/user/profile']);
      },
      (err) => {
        console.log('error', err);
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
      if (match) return match[1];
    }
    this.csrfToken =  getCookie('XSRF-TOKEN');
    console.log(this.csrfToken);

    this.userService.getUser().subscribe((user) => {console.log(user)});
  }
}
