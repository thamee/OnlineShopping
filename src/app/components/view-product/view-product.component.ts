import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,authService:AuthService) { 
    const role=authService.getUserRole();
    if(role!="Sellers"){
      this.router.navigateByUrl(`/`);

    }
  }

  products!: Product[];
  productLables!:string[]
  

  ngOnInit(): void {
    this.productLables=["Name","category","model","color","price"];
    this.getProducts()
   
  }
  getProducts(){
    this.productService.getAllProducts().subscribe((products:Product[]) => {
      this.products=products;
     
  });
  }

  editProduct(id:number){
    this.router.navigateByUrl(`edit-product/${id}`);
  }
  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe(() => {
    this.getProducts()
     
  });
  }

}
