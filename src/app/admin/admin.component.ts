import { Component, OnInit } from '@angular/core';
import {SellerProductsService} from "../seller-products/seller-products.service";
import {ProductService} from "../product/product.service";
import {SellerService} from "../seller/seller.service";
import {RegisterService} from "../register/register.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any=[];
  roles:any=[];
  constructor(public u_service:RegisterService, public s_service:SellerService) {
    this.roles.push({id:1, name: 'seller'});
    this.roles.push({id:2, name: 'buyer'});
  }


  ngOnInit(): void {
    this.users = this.u_service.GetAllData();
  }

  updateRow(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
      if (confirm ("Do you want to save changes?") == true) {
        if(e.newData['roles'] !=undefined)
        {
          if(!e.newData['roles'].includes(1))
          {
            this.s_service.RemoveData(this.s_service.getID(e.oldData["username"]));
          }

        }
        resolve(false)
        // e.newData["id"]? resolve(true):resolve(false);
      }

    });
    e.cancel = isCanceled;
  }

  updatedRow(e:any){
    let users = this.u_service.GetAllData();
    if (users !=null && users.length != 0 ){
      users[e.data["user_id"]-1].username = e.data["username"];
      users[e.data["user_id"]-1].upassword = e.data["password"];
      users[e.data["user_id"]-1].roles = e.data["roles"];
      users[e.data["user_id"]-1].isApproved = e.data["isApproved"];
      users[e.data["user_id"]-1].isLoggedIn = e.data["isLoggedIn"];
      this.u_service.UpdateData(e.data["user_id"]-1,  users[e.data["user_id"]-1]);
    }
    if(e.data['roles'].includes(1))
    {
      let sellers = this.s_service.GetAllData();
      // alert(sellers);
      if(sellers != null) {
        if (sellers.length == 0)
          this.s_service.SetData(e.data["username"], 1);
        else
          this.s_service.SetData(e.data["username"], sellers[sellers.length - 1].id + 1);
      }
      else
        this.s_service.SetData(e.data["username"],1);

    }
    alert("The row is updated successfully!")
  }

}
