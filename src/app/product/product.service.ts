export class Product{
  constructor(public name:string, public id:number, public num:any, public price:any) {
  }
}
export class ProductService{
  SetData(n:string, i:number, numbers:any, price:any){
    let product1 = new Product(n,i,numbers, price);
    let jsonData = JSON.stringify(product1);
    let num:any;
    num = i;
    localStorage.setItem('Product_'+num, jsonData);
  }
  GetAllData():Product[]{
    let products: any=[];
    for(let i=1; i<=localStorage.length;i++)
      products[i] = JSON.parse(<string>localStorage.getItem("Product_"+i));
    return products;
  }

  GetData(i:any):Product{
    let product: any;
    product = JSON.parse(<string>localStorage.getItem("Product_"+i));
    return product;
  }

  RemoveData(p:any):string{
    localStorage.removeItem("Product_"+p);
    return "The row is deleted from local storage!"
  }

  getID(username:any):number{
    let products = this.GetAllData();
    for(let i=0; i<products.length;i++){
      if(products[i] != undefined && products[i].name == username)
        return products[i].id;
    }
    return 0;

  }
  // UpdateData(n:string,id:any){
  //   this.SetData(n, id);
  // }

}
