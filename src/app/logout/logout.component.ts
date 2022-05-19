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
    if (this.users != null && this.users.length != 0) {
      let i = authService.u_i;
      this.users[i].isLoggedIn = "false";
      this.u_service.UpdateData(i,this.users[i]);
      this.router.navigate(['/main_page']);

    }
  }

  ngOnInit(): void {
  }

}
