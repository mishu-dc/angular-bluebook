import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/services/data.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService{

  public constructor(http:Http, cookieService:CookieService) { 
      let url = environment.domain + '/api/products';
      super(http, cookieService, url);
  }

  public getListByBrand(page?:number, size?:number, code?:string, name?:string,  brandId?:number, sortBy?:string, direction?:string){
      let queryString:string="?";

      queryString += page ? "page=" + page: "";
      queryString += size ? "&size=" + size: "";
      queryString += code ? "&code=" + code: "";
      queryString += name ? "&name=" + name: "";
      queryString += sortBy ? "&sortBy=" + sortBy: "";
      queryString += direction ? "&direction=" + direction: "";
      queryString += brandId && brandId>0 ? "&brandId=" + brandId: "";

      return this.http.get(this.url + queryString, {
            headers: this.getRequestHeader()
      })
      .pipe(
            map(response=> response.json()),
            catchError(this.handleError)
      );
  } 
}
