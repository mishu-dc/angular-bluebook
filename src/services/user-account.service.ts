import { AppConstants } from './../common/constants';
import { CookieService } from 'ngx-cookie-service';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';
import { HttpErrorHandler } from './http-error-handler';
import { Injectable } from '@angular/core';
import { User } from 'src/entities/user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService extends HttpErrorHandler {

    constructor(public http:Http, public cookieService:CookieService) { 
      super();
    }

    logIn(user: User){
      let url = environment.domain+ "/token";
      let body = "grant_type=password&username=" + user.username + "&password=" + user.password;
      this.cookieService.deleteAll();

      return this.http.post(url, body)
        .pipe(
            map
            (
                (response)=>{
                   let token = response.json();

                   let expiredDate = new Date();
                   expiredDate.setSeconds( expiredDate.getSeconds() + token.expires_in -10);

                   this.cookieService.set(AppConstants.TOKEN,token.access_token, expiredDate); 
                   this.cookieService.set(AppConstants.TOKEN_TYPE,token.token_type, expiredDate); 
                   this.cookieService.set(AppConstants.TOKEN_EXPIRES_IN,token.expires_in, expiredDate); 
                   this.cookieService.set(AppConstants.USER_NAME,token.userName, expiredDate); 
                }
            ),
            catchError(this.handleError)
        );
    }

    logout(){
        this.cookieService.deleteAll();
    }
}
