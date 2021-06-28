import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products!: Product[];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products:Product[]) => {
      this.products=products;
     
  });
  }

}
