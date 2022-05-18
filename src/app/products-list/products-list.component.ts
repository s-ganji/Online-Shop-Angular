import { Component, OnInit } from '@angular/core';
import {isString} from "devextreme/core/utils/type";
import {ProductService} from "../product/product.service";
import {SellerProductsService} from "../seller-products/seller-products.service";
import {AuthService} from "../auth.service";
import {SellerService} from "../seller/seller.service";
import {RegisterService} from "../register/register.service";
import DevExpress from "devextreme";
import alert = DevExpress.ui.dialog.alert;

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  p1:any;
  p2:any;
  products: any=[];
  AllProducts: any=[];
  indexes:any=[];
  seller_products:any=[];
  users:any=[];
  seller_id:any;
  sellers:any=[];
  constructor(public service: ProductService, public u_service:RegisterService, public s_service:SellerService, public sp_service: SellerProductsService, public authService : AuthService) {
    // alert(this.authService.user_name)
    this.seller_id = this.s_service.getID(this.authService.user_name);

  }
  ngOnInit(): void {
    // this.users = this.u_service.GetAllData();
    // for (let i=0; i< this.users.length;i++) {
    //   let obj: any;
    //   obj = this.users[i]
    //   if (obj != undefined && obj.isUserLoggedIn == "true")
    //
    //     }
    //
    this.AllProducts = this.service.GetAllData();
    this.seller_products = this.sp_service.GetAllData();
    if(this.seller_products != null)
    for (let i=0; i< this.seller_products.length;i++){
      let obj: any;
      obj = this.seller_products[i];
      if (obj != undefined && obj.s_id == this.seller_id){
            for (let j =0; j<this.AllProducts.length;j++){
              let obj2: any;
              obj2 = this.AllProducts[j]
              let ar = new Array();
              ar = obj.p_id;
              if (obj2 != undefined && ar.includes(obj2.id))
                  this.products.push(obj2)
            }
         }
      }
    else
      this.products = [];

    }

  keyDown(e:any) {
    const event = e.event;
    const str = event.key || String.fromCharCode(event.which);
    if (/^[.,e]$/.test(str)) {
      event.preventDefault();
    }
  }
  rowInserting (e:any){
    const isCanceled = new Promise((resolve,reject)=>{
      var id: number = +e.data["id"];
      !isString(e.data["id"]) && this.service.GetData(id) == null?resolve(false):resolve(true);
    });
    e.cancel = isCanceled;
  }

  rowInserted (e:any){
    this.seller_id = this.s_service.getID(this.authService.user_name);
    this.service.SetData(e.data["name"], e.data["id"], e.data["num"], e.data["price"]);
    let sps = this.sp_service.GetAllData();
      // this.sp_service.GetData(this.seller_id);
    let ar = new Array();

    if(sps != null){
      ar = sps[this.seller_id-1].p_id;
      ar.push(e.data["id"]);
      sps[this.seller_id-1].p_id = ar;
      this.sp_service.UpdateData(this.seller_id-1,sps[this.seller_id-1]);
    }
    else
    {
      ar[0] = e.data["id"];
      this.sp_service.SetData(this.seller_id,this.seller_id,ar)

    }
  }



  updateRow(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
      // if (confirm ("Do you want to save changes?") == true) {
      // e.newData["id"] ? resolve(true):resolve(false);
      // }
      resolve(false);

    });
    e.cancel = isCanceled;
  }

  updatedRow(e:any){
    this.service.SetData(e.data["name"], e.data["id"],e.data["num"],e.data["price"]);
  }

  rowRemoving(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
    //   this.sp_service.GetAllData().forEach(function (obj:any){
    //     // obj.p_id.includes(e.data["id"])? resolve(true):resolve(false);
    //   });
      resolve(false);
    });
    e.cancel = isCanceled;
  }

  rowRemoved(e:any) {
    this.seller_id = this.s_service.getID(this.authService.user_name);
    let message;
    let sps = this.sp_service.GetAllData();
    let ar = new Array();
    if(sps != null){
      // console.log("wwwww");
      ar = sps[this.seller_id-1].p_id;
      ar.forEach((element,index)=>{
        if(element==e.data["id"]) ar.splice(index,1);
      });
      if(ar.length == 0){
        this.sp_service.RemoveData(this.seller_id);
      }
      else{
        sps[this.seller_id-1].p_id = ar;
        this.sp_service.UpdateData(this.seller_id-1,sps);
      }


    }
    message = this.service.RemoveData(e.data["id"]);


  }




  //trickkkk
  // if(e.newData["id"] == undefined) {
  //   this.service.UpdateData(e.newData["name"], e.oldData["id"]);
  //   alert("The row is updated!")
  // }
  // else {
  //   alert("Id cannot be updated!")
  // }

  initNewRow(e:any) {
    // alert(this.indexes)
    // let max_value = this.indexes.reduce(function(a:any, b:any) {
    //   return Math.max(a, b);
    // }, -Infinity);

    e.data["id"] = this.getDefaultData();
    // this.max_index ++;
  }
  getDefaultData(){
    var max_index=0;
    for(let i=0; i<localStorage.length;i++){
      if(this.service.GetData(i))
        max_index = i;
    }
    return max_index+1;

  }

}
