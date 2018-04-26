import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../class/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  
  private url = 'user/signup';  

  constructor(private http: HttpClient) { }

  getCsrfToken(): Observable<User> {
    return this.http.get<User>(this.url);
  }

}
