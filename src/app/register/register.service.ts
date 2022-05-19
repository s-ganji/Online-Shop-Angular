import {Product} from "../product/product.service";
import {SellerProducts} from "../seller-products/seller-products.service";

export class User{
  constructor(public user_id:number, public username:any, public password:any, public roles:any=[], public isApproved:any, public isLoggedIn:any){
  }
}
export class RegisterService{

  SetData(userID:any, username: any, pass:any, role:any=[], isapp:any, isLog:any){
    let user1 = new User(userID,username,pass,role,isapp,isLog);
    let users:any;
    if (localStorage.getItem("users") == null){
      users = new Array();
    }
    else {
      users = JSON.parse(<string>localStorage.getItem("users"));
    }
    users.push(user1);
    let jsonData = JSON.stringify(users);
    localStorage.setItem('users', jsonData);

  }

  GetAllData():any[]{
    let users: any=[];
    users = JSON.parse(<string>localStorage.getItem("users"));
    return users;
  }

  GetData(i:any):any{
    let user: any;
    user = JSON.parse(<string>localStorage.getItem("users"));
    if (user != null)
      user = JSON.parse(<string>localStorage.getItem("users"))[i];
    return user;
  }

  UpdateData(i:any, uNew:any){
    let user:any;
    user = this.GetAllData();
    user[i] = uNew;
    let jsonData = JSON.stringify(user);
    localStorage.setItem("users",jsonData);
    return "The row is updated!"
  }


}
