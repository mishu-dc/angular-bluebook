import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/services/user-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {
    constructor(private accountService:UserAccountService, public router: Router){
        this.accountService.logout();
    }

    ngOnInit(): void {
        this.router.navigate(['/home']);
    }
}
