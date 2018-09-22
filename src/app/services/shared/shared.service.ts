import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	public data = {		
		user: {
			signin: false
		},
		currentCategory: ""		
	};

	constructor() { }

	setCurrentCategory(category){
		this.data.currentCategory = category;
	}

	getcurrentCategory(){
		return this.data.currentCategory;
	}

	getUserSignIn(){
		return this.data.user.signin;
	}

	setUserSignIn(signin){
		this.data.user.signin = signin;
	}
	
}
