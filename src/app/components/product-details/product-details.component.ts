import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}
  product!: Product;
  quantity=1;
  ngOnInit(): void {
    this.getProductDetail();
  }
  getProductDetail() {
    this.actRoute.paramMap.subscribe((res) =>
      this.productService
        .getProduct(res.get('id'))
        .subscribe((product: Product) => {
          this.product = product;
        })
    );
  }
}
