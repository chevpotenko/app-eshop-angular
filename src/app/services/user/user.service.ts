import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class UserService {

	public signin = new BehaviorSubject(false);
	
	constructor() {

	}

	get getSignin(): Observable<boolean> {
        return this.signin.asObservable();
    }

    setSignin(value: boolean):void {
        this.signin.next(value);
	}

	getCookie(name) {
		let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
		if (match) {
			return match[1];
		}
	}

}