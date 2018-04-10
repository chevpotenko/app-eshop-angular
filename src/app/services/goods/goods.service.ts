import { Injectable } from '@angular/core';
import { Goods } from '../../class/goods';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GoodsService {

  private url = 'api/goods';

  constructor(private http: HttpClient) { }

  getGoods(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.url);
  }

}
