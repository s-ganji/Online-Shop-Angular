export class Seller{
  constructor(public name:string, public id:number) {
  }
}
export class SellerService{

  SetData(n:string, i:number){
    // alert(n);
    // alert(i);
    // let seller1 = new Seller(n,i);
    // let jsonData = JSON.stringify(seller1);
    // let sellers:any = new Array();
    // if(i != 1)
    //   sellers = localStorage.getItem("sellers");
    // alert(sellers);
    // alert(jsonData);
    // sellers = sellers.push(jsonData);
    // alert(JSON.stringify(sellers[0]))
    // localStorage.setItem("sellers", sellers);
  }

  GetAllData():Seller[]{
    let sellers: any=[];
    for(let i=1; i<=localStorage.length;i++){
      sellers[i] = JSON.parse(<string>localStorage.getItem("seller_"+i));
    }

    return sellers;
  }

  GetData(i:any):Seller{
    let seller: any;
    seller = JSON.parse(<string>localStorage.getItem("seller_"+i));
    return seller;
  }

  RemoveData(p:any):string{
    localStorage.removeItem("seller_"+p);
    return "The row is deleted from local storage!"
  }

  getID(username:any):number{
    let sellers = this.GetAllData();
    for(let i=0; i<sellers.length;i++){
      if(sellers[i] != undefined && sellers[i].name == username)
        return sellers[i].id;
    }
    return 0;

  }
  UpdateData(n:string,id:any){
    this.SetData(n, id);
  }

}
