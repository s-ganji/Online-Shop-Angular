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

  GetAllData():SellerProducts[]{
    let sp: any=[];
    for(let i=1; i<=localStorage.length;i++){
      sp[i] = JSON.parse(<string>localStorage.getItem("sp_"+i));
    }

    return sp;
  }

  SetData(sp_id:any, s_id:any, p_id:any=[]){
    let sp = new SellerProducts(sp_id,s_id,p_id);
    let jsonData = JSON.stringify(sp);
    let num:any;
    num = sp_id;
    localStorage.setItem('sp_'+num, jsonData);
  }




  GetData(i:any):SellerProducts{
    let seller: any;
    seller = JSON.parse(<string>localStorage.getItem("sp_"+i));
    return seller;
  }

  RemoveData(p:any):string{
    localStorage.removeItem("sp_"+p);
    return "The row is deleted from local storage!"
  }


}
