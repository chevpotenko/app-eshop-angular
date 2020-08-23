import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
    public signin = new BehaviorSubject(false);

    constructor() { }

    get getSignin(): Observable<boolean> {
        return this.signin.asObservable();
    }

    setSignin(value: boolean): void {
        this.signin.next(value);
    }
}
