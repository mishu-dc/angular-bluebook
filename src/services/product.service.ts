import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
    let url = environment.domain + '/api/products';
    super(http, url, cookieService);
  }
}
