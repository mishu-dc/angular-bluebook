import { AppConstants } from './../common/constants';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorHandler } from './http-error-handler';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService extends HttpErrorHandler {

    constructor(public http:Http, public url:string, public cookieService:CookieService) {
		    super();
    }

    private getRequestHeader(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization','bearer ' + this.cookieService.get(AppConstants.TOKEN));
        return headers;
    }

    public getList(page?:number, size?:number, code?:string, name?:string, sortBy?:string, direction?:string){
		    let queryString:string="?";
		
        queryString += page? "page=" + page: "";
        queryString += size? "&size=" + size: "";
        queryString += code? "&code=" + code: "";
        queryString += name? "&name=" + name: "";
        queryString += sortBy? "&sortBy=" + sortBy: "";
        queryString += direction? "&direction=" + direction: "";

        return this.http.get(this.url + queryString, {
              headers: this.getRequestHeader()
        })
        .pipe(
              map(response=> response.json()),
              catchError(super.handleError)
        );
    }

    public save(resource){
        return this.http.post(this.url + '/save', resource, {
          headers: this.getRequestHeader()
        })
        .pipe(
              map(response=>response.json()),
              catchError(super.handleError)
        );
    }

    
}
