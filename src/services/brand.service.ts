import { CookieService } from 'ngx-cookie-service';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
    let url = environment.domain + '/api/brands';
    super(http, url, cookieService);
  }
}
