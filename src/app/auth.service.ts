import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from 'rxjs';
import {RegisterService} from "./register/register.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:any = [];
  userID:any;
  user_name:any;
  u_i:any;
  constructor(private u_service: RegisterService,private router: Router) {
    this.users = this.u_service.GetAllData();
  }
  // isUserLoggedIn: string = "false";

  login(userName: string, passWord: string) {
    this.users = this.u_service.GetAllData();
    if (this.users != null && this.users.length != 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (userName == this.users[i].username && passWord == this.users[i].password && this.users[i].isApproved) {
          this.user_name = this.users[i].username;
          this.u_i = i;
          this.users[i].isLoggedIn = "true";
          this.u_service.UpdateData(i, this.users[i]);
          this.router.navigate(['/logged_in']);
        }
      }
    }
  }


  logout(): void {
    for (let i = 0; i < this.users.length; i++) {
      let obj: any;
      obj = this.users[i];
      if (obj != undefined){
      if(obj.isLoggedIn == "true"){
        // alert("11111111");
        // this.isUserLoggedIn = "false";
        this.u_service.SetData(obj.user_id,obj.username,obj.password,obj.roles,obj.isApproved,"false");
      }}
    }

  }


}
