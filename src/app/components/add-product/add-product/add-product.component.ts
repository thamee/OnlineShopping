import { Component, OnInit } from '@angular/core';
import { MasterData } from 'src/app/models/master-data';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  
  constructor(private productService: ProductService) { }
  categories!: MasterData[];
  form=new Product()

  error = {
  name: '',
  password: null
};  

  ngOnInit(): void {
    this.productService.getProductCategories().subscribe((categories:MasterData[]) => {
      this.categories=categories;
     
  });
}


formSubmit() {
  if (this.validate()) {
    this.productService.addProduct(this.form).subscribe(() => {
      this.reset()
     
  });
  }
}
reset(){
  this.form=new Product
}
validate(): boolean {

  /* Validate email */
  if (!this.form.name || this.form.name.length <=0) {
    this.error.name = "Name is required";
    return false;
  } else { this.error.name = ''; }

 
  return true;
}


}
