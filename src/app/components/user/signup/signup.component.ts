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
    this.userService.getCsrfToken().subscribe((result) => {
      this.data = result;
    });
  }

}
