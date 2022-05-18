export class Seller{
  constructor(public name:string, public id:number) {
  }
}
export class SellerService{

  SetData(n:string, i:number){

    let seller1 = new Seller(n,i);
    let sellers:any;
    if(i != 1) {
      sellers = JSON.parse(<string>localStorage.getItem("sellers"));
    }
    else {
      sellers = new Array();
    }

    sellers.push(seller1);
    let jsonData = JSON.stringify(sellers);

    // alert(JSON.stringify(sellers[0]))
    localStorage.setItem("sellers", jsonData);
  }

  GetAllData():any[]{
    let sellers: any=[];
    sellers = JSON.parse(<string>localStorage.getItem("sellers"));
    return sellers;
  }

  GetData(i:any):any{
    let seller: any;
    seller = JSON.parse(<string>localStorage.getItem("sellers"))[i];
    return seller;
  }

  RemoveData(i:any):string{
    let sellers:any;
    sellers = this.GetAllData();
    sellers.forEach((element:any,index:any)=>{
      if(element.id== i) sellers.splice(index,1);
    });
      sellers.forEach(function (s:any){
        if (s.id > i)
          s.id = s.id - 1;
      })
    let jsonData = JSON.stringify(sellers);
    localStorage.setItem("sellers",jsonData);
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


}
