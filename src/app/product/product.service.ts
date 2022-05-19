export class Product{
  constructor(public name:string, public id:number, public num:any, public price:any) {
  }
}
export class ProductService{
  SetData(n:string, i:number, numbers:any, price:any){
    let product1 = new Product(n,i,numbers, price);
    let products:any;
    if (localStorage.getItem("products") == null){
      products = new Array();
    }
    else {
      products = JSON.parse(<string>localStorage.getItem("products"));
    }
    products.push(product1);
    let jsonData = JSON.stringify(products);
    localStorage.setItem('products', jsonData);
  }

  GetAllData():any[]{
    let products: any=[];
    products = JSON.parse(<string>localStorage.getItem("products"));
    return products;
  }

  GetData(i:any):any{
    let product: any;
    product = JSON.parse(<string>localStorage.getItem("products"))
    if (product != null)
      product = JSON.parse(<string>localStorage.getItem("products"))[i];
    return product;
  }

  RemoveData(i:any):string{
    let products:any;
    products = this.GetAllData();
    products.forEach((element:any,index:any)=>{
      if(element.id== i) products.splice(index,1);
    });
    products.forEach(function (s:any){
      if (s.id > i)
        s.id = s.id - 1;
    })
    let jsonData = JSON.stringify(products);
    localStorage.setItem("products",jsonData);
    return "The row is deleted from local storage!"
  }

  UpdateData(i:any, pNew:any){
    let ps:any;
    ps = this.GetAllData();
    ps[i] = pNew;
    let jsonData = JSON.stringify(ps);
    localStorage.setItem("products",jsonData);
    return "The row is updated!"
  }

  getID(username:any):number{
    let products = this.GetAllData();
    for(let i=0; i<products.length;i++){
      if(products != null)
        if(products[i].name == username)
        return products[i].id;
    }
    return 0;

  }
  // UpdateData(n:string,id:any){
  //   this.SetData(n, id);
  // }

}
