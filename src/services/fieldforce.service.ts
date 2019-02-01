import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FieldforceService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
      let url = environment.domain + '/api/fieldforces';
      super(http, cookieService, url);
  }

  public getListByDistributor(page?:number, size?:number, code?:string, name?:string,  distributorId?:number, sortBy?:string, direction?:string){
      let queryString:string="?";

      queryString += page ? "page=" + page: "";
      queryString += size ? "&size=" + size: "";
      queryString += code ? "&code=" + code: "";
      queryString += name ? "&name=" + name: "";
      queryString += sortBy ? "&sortBy=" + sortBy: "";
      queryString += direction ? "&direction=" + direction: "";
      queryString += distributorId && distributorId>0 ? "&distributorId=" + distributorId: "";

      return this.http.get(this.url + queryString, {
            headers: this.getRequestHeader()
      })
      .pipe(
            map(response=> response.json()),
            catchError(this.handleError)
      );
  }
}
