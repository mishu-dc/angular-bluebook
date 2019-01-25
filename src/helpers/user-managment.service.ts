import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { AppConstants } from './../common/constants';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {

    constructor(public cookieService:CookieService){

    }

    isAuthenticated(){
        if(this.cookieService.get(AppConstants.USER_NAME)){
            return true;
        }
        return false;
    }

    getUserName(){
        return this.cookieService.get(AppConstants.USER_NAME);
    }

}
