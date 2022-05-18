import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SellerComponent} from "./seller/seller.component";
import {ProductComponent} from "./product/product.component";
import {SellerProductsComponent} from "./seller-products/seller-products.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {ProductsGuard} from "./products.guard";
import {AdminComponent} from "./admin/admin.component";
import {RegisterComponent} from "./register/register.component";
import {SellerProductsGuard} from "./seller-products.guard";
import {SellersGuard} from "./sellers.guard";
import {LoggedInComponent} from "./logged_in/logged-in.component";
import {ControlUsersGuard} from "./control-users.guard";
import {MainPageComponent} from "./main-page/main-page.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductsListGuard} from "./products-list.guard";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'logged_in', component: LoggedInComponent },
  { path: 'main_page', component: MainPageComponent },
  // { path: 'products', component: ProductComponent},
  { path: 'sellers', component: SellerComponent, canActivate: [SellersGuard]},
  { path: 'seller_products', component: SellerProductsComponent, canActivate: [SellerProductsGuard]},
  { path: 'admin_page', component: AdminComponent, canActivate: [ControlUsersGuard]},
  {path: 'products', component: ProductComponent, canActivate: [ProductsGuard]},
  {path: 'products_list', component: ProductsListComponent, canActivate: [ProductsListGuard]},
  // { path: 'expenses/detail/:id', component: ProductsEntryComponent, canActivate: [ProductsGuard]},
  // { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
