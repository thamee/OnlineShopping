import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { SalesProduct } from '../models/sales-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'https://localhost:5001'; 
  
  // get all the languages for the dropdown
  getProductCategories():any {
   let reponse=this.http.get(`${this.baseUrl}/categories`);
   return reponse;
   
 }
 addProduct(product:Product):any {
  let reponse=this.http.post(`${this.baseUrl}/product`,{
    name:product.name,
    mobile:product.color,
    model : product.model,
    price : product.price,
    color : product.color,
    categoryId : product.category,
    isOutOfStock:product.isOutOfStock

  });
  return reponse;
}
updateProduct(product:Product):any {
  let reponse=this.http.patch(`${this.baseUrl}/products/${product.id}`,{
    id:product.id,
    name:product.name,
    mobile:product.color,
    model : product.model,
    price : product.price,
    color : product.color,
    categoryId : product.category.id,
    isOutOfStock:product.isOutOfStock


  });
  return reponse;
}


getAllProducts():any {
 let reponse=this.http.get(`${this.baseUrl}/products`);
 return reponse;
}

getProduct(Id:string|null):any {
  let reponse=this.http.get(`${this.baseUrl}/products/${Id}`);
  return reponse;
 }
 deleteProduct(Id:string|null):any {
  let reponse=this.http.delete(`${this.baseUrl}/products/${Id}`);
  return reponse;
 }

 addSales(product:Product,quantity:number):any {
  let reponse=this.http.post(`${this.baseUrl}/sales`,{
    productId:product.id,
    quantity:quantity
  

  });
  return reponse;
}

}
