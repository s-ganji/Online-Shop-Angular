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
  constructor(private u_service: RegisterService,private router: Router) {
    this.users = this.u_service.GetAllData();
  }
  // isUserLoggedIn: string = "false";

  login(userName: string, passWord: string) {

    this.users = this.u_service.GetAllData();
    for (let i = 0; i < this.users.length; i++) {
      let obj: any;
      obj = this.users[i]
      if (obj != undefined){
          if (userName == obj.username && passWord == obj.password && obj.isApproved ) {
            // alert("yeeeyyy");
          // this.isUserLoggedIn = "true";
          // this.userID = obj.user_id;
            this.user_name = obj.username;
          this.u_service.SetData(obj.user_id,obj.username,obj.password,obj.roles,obj.isApproved,"true")

            this.router.navigate(['/logged_in']);
        }
        // else if(userName == obj.username && passWord == obj.password && obj.isApproved == true && obj.isLoggedIn == true){
        //   alert("you already logged in!")
        //   this.router.navigate(['/admin_page'])
        // }
    }
    }

    // this.users.forEach((e:any)=> {
    //     if (userName == e.username && passWord == e.password && e.isApproved == true)
    //     {
    //       alert(e.user_id)
    //       this.isUserLoggedIn = "true";
    //       this.userID = e.user_id;
    //       localStorage.setItem('isUserLoggedIn'+ e.user_id, this.isUserLoggedIn);
    //     }
    //   });

    // return of(this.isUserLoggedIn =="true").pipe(
    //   delay(1000),
    //   tap(val => {
    //     alert("Is User Authentication is successful: " + val);
    //   })
    // );

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
