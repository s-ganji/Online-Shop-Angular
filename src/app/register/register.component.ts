import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:any;
  passWord:any;
  formdata:any;
  isBuyer:any;
  isSeller:any;
  constructor(public u_service:RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userName: new FormControl(""),
      passWord: new FormControl(""),
      // buyer_check: new FormControl(""),
      // seller_check: new FormControl("")
    });
  }
  onClickSubmit(data:any) {this.userName = data.userName;
    this.passWord = data.passWord;
    // this.isBuyer = data.buyer_check;
    // this.isSeller = data.seller_check;
    let users = this.u_service.GetAllData();
    if(users != null)
    {
      if(users.length == 0)
        this.u_service.SetData(1, this.userName, this.passWord,[1,2],true,"false");
      else
        this.u_service.SetData(users[users.length - 1].user_id + 1, this.userName, this.passWord,[],false,"false");
    }
    else{
      this.u_service.SetData(1, this.userName, this.passWord,[1,2],true,"false");
    }
  }

}
