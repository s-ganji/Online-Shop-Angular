import { Component, OnInit } from '@angular/core';
import {ProductService} from "./product.service";
import {isString} from "devextreme/core/utils/type";
import {SellerProductsService} from "../seller-products/seller-products.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  p1:any;
  p2:any;
  products: any=[];
  service:ProductService;
  sp_service: SellerProductsService;
  indexes:any=[];

  constructor(s: ProductService,sp: SellerProductsService) {
    this.service = s;
    this.sp_service = sp;


    // var list_in :any = [];
    // this.products.forEach((e:any)=> {
    //     list_in.push(e.id);
    //   });
    // alert(list_in)

  }
  ngOnInit(): void {
    this.products = this.service.GetAllData();
  }

  title = 'my-first-project';



}
