import { Component, OnInit } from '@angular/core';
import {SellerService} from "../seller/seller.service";
import {SellerProductsService} from "./seller-products.service";
import {ProductService} from "../product/product.service";



@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})


export class SellerProductsComponent implements OnInit {

  seller_products:any=[];
  products:any=[];
  sellers:any=[];
  sp_service:SellerProductsService;
  p_service:ProductService;
  dropDownOptions: object;
  s_service:SellerService;



  constructor(s: SellerProductsService,p: ProductService,seller: SellerService) {
    this.dropDownOptions = { width: 500 };
    this.sp_service = s;
    this.p_service = p;
    this.s_service = seller;




  }



  ngOnInit(): void {



    this.seller_products = this.sp_service.GetAllData();

    for (let i = 0; i < this.p_service.GetAllData().length; i++) {
      let obj: any;
      obj = this.p_service.GetAllData()[i]
      if (obj != undefined)
        this.products.push({Name: obj.name, id: obj.id});
    }

    for (let i = 0; i < this.s_service.GetAllData().length; i++) {
      let obj: any;
      obj = this.s_service.GetAllData()[i]
      if (obj != undefined)
        this.sellers.push({name: obj.name, id: obj.id});
    }
  }
    rowInserting (e:any){
      const isCanceled = new Promise((resolve,reject)=>{

        // alert(e.data["s_id"]);
        // alert(e.data["p_id"]);
        resolve(false);
        // var id: number = +e.data["id"];
        // id.toString() === e.data["id"] && this.s_service.GetData(id) == null?resolve(false):resolve(true);

      });
      e.cancel = isCanceled;
    }

  rowInserted (e:any){
    this.sp_service.SetData(e.data["sp_id"], e.data["s_id"], e.data["p_id"]);
    alert("row is inserted successfully!")
  }

  initNewRow(e:any) {
    e.data["sp_id"] = this.getDefaultData();
  }
  getDefaultData(){
    let ls_keys = Object. keys(localStorage);
    let PATTERN = 'sp_',
        filtered_keys = ls_keys.filter(function (str) { return str.includes(PATTERN); });

    let id_array:any = [];
    filtered_keys.forEach(function (a){
      id_array.push(a.split('_')[1]);
    });


    if(id_array.length == 0) return 1;
    else {
      const empty: any = [];
      var max = id_array.reduce(function (a: number, b: number) {
        return Math.max(a, b);
      }, Math.max(...empty));
      return max + 1;
    }



    // var max_index=0;
    // for(let i=0; i<localStorage.length;i++)
    //   if(this.sp_service.GetData(i))
    //     max_index = i;
    //
    // return max_index+1;

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
    this.sp_service.SetData(e.data["sp_id"],e.data["s_id"], e.data["p_id"])
    alert("The row is updated successfully!")
  }

  rowRemoving(e:any) {
    const isCanceled = new Promise((resolve, reject) => {
      let message;
      message = this.sp_service.RemoveData(e.data["sp_id"]);
      alert(message)
      resolve(false);
    });
    e.cancel = isCanceled;
  }


  products_customizeText (cellInfo:any) {
    return cellInfo.name ;
  }
}
