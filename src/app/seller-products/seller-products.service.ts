import {Seller, SellerService} from "../seller/seller.service";
import {ProductService} from "../product/product.service";
import {Injectable} from "@angular/core";

export class SellerProducts{
  constructor(public sp_id:any,public s_id:any, public p_id:any = []) {
  }
}
@Injectable()
export class SellerProductsService {

  s_service:SellerService;
  p_service:ProductService;
  constructor(s : SellerService, p: ProductService) {
    this.s_service = s;
    this.p_service = p;
  }

  GetAllData():any[]{
    let sp: any=[];
    sp = JSON.parse(<string>localStorage.getItem("sp"));
    return sp;
  }

  SetData(sp_id:any, s_id:any, p_id:any=[]){
    let sp = new SellerProducts(sp_id,s_id,p_id);

    let seller_products:any;
    if(sp_id != 1) {
      seller_products = JSON.parse(<string>localStorage.getItem("sp"));
    }
    else {
      seller_products= new Array();
    }

    seller_products.push(sp);
    let jsonData = JSON.stringify(seller_products);

    // alert(JSON.stringify(sellers[0]))
    localStorage.setItem("sp", jsonData);

  }


  GetData(i:any):any{
    let sp: any;
    sp = JSON.parse(<string>localStorage.getItem("sp"))[i];
    return sp;
  }

  RemoveData(i:any):string{
    let sps:any;
    sps = this.GetAllData();
    sps.forEach((element:any,index:any)=>{
      if(element.sp_id == i) sps.splice(index,1);
    });
    sps.forEach(function (s:any){
      if (s.id > i)
        s.id = s.id - 1;
    })
    let jsonData = JSON.stringify(sps);
    localStorage.setItem("sp",jsonData);
    return "The row is deleted from local storage!"
  }
  UpdateData(i:any, spNew:any){
    let sps:any;
    sps = this.GetAllData();
    sps[i] = spNew;
    let jsonData = JSON.stringify(sps);
    localStorage.setItem("sp",jsonData);
    return "The row is updated!"
  }


}
