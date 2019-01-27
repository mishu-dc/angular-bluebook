import { BadInput } from './../../common/bad-input';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserAccountService } from 'src/services/user-account.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  showLoading = false;
  loginError = "";

  constructor(public accountService: UserAccountService, public router: Router) { 

  }

  log(element){
      console.log(element);
  }

  signIn(loginForm){
    if(loginForm.valid){
        this.showLoading = true;
        this.accountService.logIn(loginForm.value).subscribe(
          ()=>{
              this.router.navigate(['/home']);
          },
          (error:BadInput)=>{
            this.loginError = error.originalError.error_description;
            this.showLoading = false;
          }
        );
    }
  }
}
