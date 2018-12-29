import { environment } from './../environments/environment';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
    let url = environment.domain + '/api/markets';
    super(http, url, cookieService);
  }
}
