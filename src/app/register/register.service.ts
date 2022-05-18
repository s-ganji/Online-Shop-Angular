import {Product} from "../product/product.service";
import {SellerProducts} from "../seller-products/seller-products.service";

export class User{
  constructor(public user_id:number, public username:any, public password:any, public roles:any=[], public isApproved:any, public isLoggedIn:any){
  }
}
export class RegisterService{

  SetData(userID:any, username: any, pass:any, role:any=[], isapp:any, isLog:any){

    let product1 = new User(userID,username,pass,role,isapp,isLog);
    let jsonData = JSON.stringify(product1);
    let num:any;
    num = userID;
    localStorage.setItem('User_'+num, jsonData);
  }

  GetData(i:any):User{
    let user: any;
    user = JSON.parse(<string>localStorage.getItem("User_"+i));
    return user;
  }

  GetAllData():User[]{
    let users: any=[];
    for(let i=1; i<=localStorage.length;i++){
      users[i] = JSON.parse(<string>localStorage.getItem("User_"+i));
    }

    return users;
  }

}
