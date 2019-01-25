import { Component } from '@angular/core';
import { UserManagmentService } from 'src/helpers/user-managment.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
    constructor(public userManagementService: UserManagmentService){
      
    }

    isAuthenticated(){
        return this.userManagementService.isAuthenticated();
    }

    getUserName(){
        if(this.userManagementService.getUserName()){
            return "Hello " + this.userManagementService.getUserName() + "!";  
        }
        return "Register";
    }
}
