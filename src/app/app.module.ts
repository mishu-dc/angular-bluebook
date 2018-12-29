import { MarketService } from './../services/market.service';
import { FieldforceService } from './../services/fieldforce.service';
import { DistributorService } from './../services/distributor.service';
import { BrandService } from './../services/brand.service';
import { AppErrorHandler } from './../common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from 'src/services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService,
    BrandService,
    CookieService,
    DistributorService,
    FieldforceService,
    MarketService,
    ProductService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
