import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../class/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {  of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
   
  constructor(private http: HttpClient) { }

  addUser(user:User): Observable<User> {
    return this.http.post<User>('api/user/signup', user, httpOptions)
  }

  signinUser(user:User): Observable<User> {
    return this.http.post<User>('api/user/signin', user, httpOptions)
  }

  getUser(): Observable<User> {
    return this.http.get<User>('api/user/signup');   
  }
  
}
