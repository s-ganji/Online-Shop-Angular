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
    var max_index=0;
    for(let i=1; i<=localStorage.length;i++){
      if(this.u_service.GetData(i))
        max_index = i;
    }
    max_index == 0? this.u_service.SetData(max_index+1, this.userName, this.passWord,[1,2],true,"false"):
      this.u_service.SetData(max_index+1, this.userName, this.passWord,[],false,"false")
    setTimeout(()=>{ this.router.navigate(['/login'])}, 1000);
  }
}
