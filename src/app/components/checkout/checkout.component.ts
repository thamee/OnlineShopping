import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesProduct } from 'src/app/models/sales-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,) { }
  orderedProducts!: SalesProduct[];
  productLables!:string[]

  ngOnInit(): void {
    this.productLables=["Name","model","color","price","quantity"];
    this.getOrderedProducts()
   
  }
  getOrderedProducts(){
    this.productService.getSales().subscribe((products:SalesProduct[]) => {
      this.orderedProducts=products;
     
  });
  }

  addOrder(){
    this.productService.conformSales().subscribe(() => {
      this.router.navigateByUrl(`/`);
     
  });
  }

}
