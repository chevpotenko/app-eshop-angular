import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../class/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  public data:User;

  constructor(private userService: UserService) { }

  ngOnInit() {

    // this.userService.getCsrfToken().subscribe((result) => {
    //   this.data = result;
    // });
    
    var getCookie = function(name) {
      var match = document.cookie.match(new RegExp(name + '=([^;]+)'));
      if (match) return match[1];
    }

    this.data = {
      csrfToken: getCookie('XSRF-TOKEN')      
    }

    console.log(this.data);
  }

}
