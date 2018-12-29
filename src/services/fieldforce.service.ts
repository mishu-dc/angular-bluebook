import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FieldforceService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
    let url = environment.domain + '/api/fieldforces';
    super(http, url, cookieService);
  }
}
