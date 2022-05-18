import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {RegisterService} from "../register/register.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  users:any=[];
  constructor(private authService : AuthService, private router: Router, public u_service: RegisterService) {
  this.users = this.u_service.GetAllData();
    for (let i = 0; i < this.users.length; i++) {
      let obj: any;
      obj = this.users[i];
      if (obj != undefined) {
        if (obj.isLoggedIn == "true") {
          this.u_service.SetData(obj.user_id, obj.username, obj.password, obj.roles, obj.isApproved, "false");
        }
      }
    }
    // this.authService.logout();
    this.router.navigate(['/main_page']);

  }

  ngOnInit(): void {



  }

}
