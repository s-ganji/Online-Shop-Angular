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
        resolve(false)
        // e.newData["id"]? resolve(true):resolve(false);
      }

    });
    e.cancel = isCanceled;
  }

  updatedRow(e:any){
    this.u_service.SetData(e.data["user_id"],e.data["username"], e.data["password"],e.data['roles'],e.data['isApproved'],e.data["isLoggedIn"])
    if(e.data['roles'].includes(1))
    {
      let sellers = this.s_service.GetAllData();
      alert(sellers);
      if(sellers !=null) {
        if (sellers.length == 0)
          this.s_service.SetData(e.data["username"], 1);
        this.s_service.SetData(e.data["username"], sellers[sellers.length - 1].id + 1);
      }
      else
        this.s_service.SetData(e.data["username"],1);

    }
    alert("The row is updated successfully!")
  }

}
