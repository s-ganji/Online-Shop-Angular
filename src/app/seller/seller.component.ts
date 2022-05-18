import { Component, OnInit } from '@angular/core';
import {SellerService} from "./seller.service";
import {isString} from "devextreme/core/utils/type";
import {SellerProductsService} from "../seller-products/seller-products.service";

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  p1:any;
  p2:any;
  sellers: any=[];
  s_service:SellerService;
  sp_service: SellerProductsService;
  constructor(s: SellerService, sp: SellerProductsService) {
      this.s_service = s;
      this.sp_service = sp;
  }

  ngOnInit(): void{
    this.sellers = this.s_service.GetAllData();
  }



  updateRow(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
      if (confirm ("Do you want to save changes?") == true) {
        e.newData["id"]? resolve(true):resolve(false);
      }

    });
    e.cancel = isCanceled;
  }

  updatedRow(e:any){
    this.s_service.SetData(e.newData["name"], e.oldData["id"]);
    alert("The row is updated successfully!")
  }

  rowRemoving(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
      // this.sp_service.GetAllData().forEach(function (obj:any){
      //   obj.p_id.includes(e.data["id"])? resolve(true):resolve(false);
      // });
      resolve(false);
    });
    e.cancel = isCanceled;
  }
  rowRemoved(e:any) {
    let message;
    message = this.s_service.RemoveData(e.data["id"]);
    alert(message)
  }

  // initNewRow(e:any) {
  //   e.data["id"] = this.getDefaultData();
  // }
  // getDefaultData(){
  //   var max_index=0;
  //   for(let i=0; i<localStorage.length;i++){
  //     if(this.s_service.GetData(i))
  //       max_index = i;
  //   }
  //   return max_index+1;
  //
  // }

}
