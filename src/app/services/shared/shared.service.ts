import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	public data = {		
		user: {
			signin: false
		}	
	};

	constructor() {

	}

	getUserSignIn(){
		return this.data.user.signin;
	}

	setUserSignIn(signin){
		this.data.user.signin = signin;
	}
	
}
