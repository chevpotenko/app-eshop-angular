import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class HttpParamsService {

	public httpParams: HttpParams;

	constructor() {
		this.httpParams = new HttpParams()
	}

}
