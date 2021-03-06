import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {RegisterService} from "./register/register.service";

@Injectable({
  providedIn: 'root'
})
export class SellerProductsGuard implements CanActivate {
  users:any=[];
  not_allowed:number;
  constructor(private authService: AuthService, private router: Router,public u_service:RegisterService) {
    this.users = this.u_service.GetAllData();
    this.not_allowed = 0;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    this.users = this.u_service.GetAllData();
    for (let i = 0; i < this.users.length; i++) {
      let obj: any;
      obj = this.users[i]
      if (obj != undefined) {
        if (obj.isLoggedIn == "true" && obj.user_id == 1) {
          if (url == "/logged_in")
            this.router.parseUrl('/seller_products');
          this.not_allowed ++;
        }}}

    if(this.not_allowed == 0) {
      alert("You cannot have access to this page!")
      return this.router.parseUrl('/logged_in');
    }

    return true;

  }
}
