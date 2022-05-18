import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DxDataGridModule,
  DxDropDownBoxModule,
  DxListModule,
  DxNumberBoxModule,
  DxTagBoxModule
} from 'devextreme-angular';
import { SellerComponent } from './seller/seller.component';
import {SellerService} from "./seller/seller.service";
import { ProductComponent } from './product/product.component';
import {ProductService} from "./product/product.service";
import { SellerProductsComponent } from './seller-products/seller-products.component';
import {SellerProductsService} from "./seller-products/seller-products.service";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./register/register.service";
import { DxCheckBoxModule } from 'devextreme-angular';
import {LoggedInComponent} from "./logged_in/logged-in.component";
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    ProductComponent,
    SellerProductsComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    RegisterComponent,
    LoggedInComponent,
    MainPageComponent,
    ProductsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxListModule,
    DxDropDownBoxModule,
    DxTagBoxModule,
    ReactiveFormsModule,
    DxCheckBoxModule,
    DxNumberBoxModule

  ],
  providers: [ProductService,SellerService,SellerProductsService,RegisterService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
