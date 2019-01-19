import { FieldforceService } from './../services/fieldforce.service';
import { MarketService } from './../services/market.service';
import { ProductService } from 'src/services/product.service';
import { BrandService } from './../services/brand.service';
import { Component } from '@angular/core';
import { UserAccountService } from 'src/services/user-account.service';
import { User } from 'src/entities/user';
import { DistributorService } from 'src/services/distributor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bluebook';

  constructor(private userAccountService: UserAccountService,
              private brandService:BrandService, 
              private productService:ProductService,
              private distributorService: DistributorService,
              private marketService: MarketService,
              private fieldforceService: FieldforceService){
    let user = new User();
    user.username="mishu_dc@yahoo.com";
    user.password="Aa123456@";
    userAccountService.logIn(user)
      .subscribe(
        ()=>{
          brandService.getList(1,10).subscribe();
          productService.getList(1,10).subscribe();
          distributorService.getList(1,10).subscribe();
          marketService.getList(1,10).subscribe();
          fieldforceService.getList(1,10).subscribe();
        }
      );
  }

}