import { Component } from '@angular/core';
import { UserManagmentService } from 'src/helpers/user-managment.service';
import { UserAccountService } from 'src/services/user-account.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
    constructor(public accountService: UserAccountService){
      
    }

    isAuthenticated(){
        return this.accountService.isAuthenticated();
    }

    getUserName(){
        if(this.accountService.getUserName()){
            return "Hello " + this.accountService.getUserName() + "!";  
        }
        return "Register";
    }
}
