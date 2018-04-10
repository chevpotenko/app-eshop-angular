import { Injectable } from '@angular/core';
import { Banner } from '../../class/banner';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MainBannerService {

  private url = 'api/banners';

  constructor(private http: HttpClient) { }

  getMainBanner(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.url);
  }

}
