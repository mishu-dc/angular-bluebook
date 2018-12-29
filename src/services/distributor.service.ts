import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
    let url = environment.domain + '/api/distributors';
    super(http, url, cookieService);
  }
}
