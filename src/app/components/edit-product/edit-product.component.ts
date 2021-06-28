import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterData } from 'src/app/models/master-data';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}
  product!: Product;
  categories !: MasterData[];
  form = new Product();

  error = {
    name: '',
    password: null,
  };

  ngOnInit(): void {
    this.getProductDetail();
    this.getCategories()
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
  getCategories()
  {
    this.productService.getProductCategories().subscribe((categories:MasterData[]) => {
      this.categories=categories;
     
  });
  }

  formSubmit() {
    if (this.validate()) {
      this.productService.updateProduct(this.product).subscribe(() => {
        this.router.navigateByUrl(`view-product`);
      });
    }
  }

  validate(): boolean {
    if (!this.product.name || this.product.name.length <= 0) {
      this.error.name = 'Name is required';
      return false;
    } else {
      this.error.name = '';
    }

    return true;
  }
}
