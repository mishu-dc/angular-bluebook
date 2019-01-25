import { UserManagmentService } from './../helpers/user-managment.service';
import { MarketService } from './../services/market.service';
import { FieldforceService } from './../services/fieldforce.service';
import { DistributorService } from './../services/distributor.service';
import { BrandService } from './../services/brand.service';
import { AppErrorHandler } from './../common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from 'src/services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/services/product.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { DistributorComponent } from './distributor/distributor.component';
import { MarketComponent } from './market/market.component';
import { FieldForceComponent } from './field-force/field-force.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BrandComponent,
    ProductComponent,
    DistributorComponent,
    MarketComponent,
    FieldForceComponent,
    NotFoundComponent,
    NavigationComponent,
    LoginComponent,
    LogoffComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
		HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
			{					path:'',				        component: HomeComponent  		      },
			{					path:'home',				    component: HomeComponent			      },
			{ 				path:'about',  			    component: AboutComponent 			    },
			{   			path:'contact',			    component: ContactComponent			    },
			{					path:'brand/:id',		    component: BrandComponent				    },
			{					path:'brand',				    component: BrandComponent				    },
			{					path:'product',			    component: ProductComponent			    },
			{					path:'market',			    component: MarketComponent		      },
			{					path:'distributor',	    component: DistributorComponent	    },
      {					path:'fieldforce',	    component: FieldForceComponent	    },
      {					path:'login',	          component: LoginComponent	          },
      {					path:'logoff',          component: LogoffComponent          },
      {					path:'register',        component: RegisterComponent        },
      {					path:'changepassword',  component: ChangePasswordComponent  },
			{					path:'**',					    component: NotFoundComponent	      }
    ])
  ],
  providers: [
    DataService,
    BrandService,
    CookieService,
    DistributorService,
    FieldforceService,
    MarketService,
    ProductService,
    UserManagmentService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
