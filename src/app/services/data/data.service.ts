import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) { 

    }

    public getAll<T>(url): Observable<T> {
        return this.http.get<T>(url);
    }

}
