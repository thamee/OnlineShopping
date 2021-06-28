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
  form=new Product();
  errors!:[];
  error = {
  name: '',
  category:'',
  color:'',
  model:'',
  price:'',
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
     
  },(error:any)=>{
    debugger
    if(error && error.error&& error.error.errors)      {
      this.errors=error.error.errors
    }
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
  } 
  else if (!this.form.category) {
    this.error.category = "Please select a Category";
    return false;
  }
  else if (!this.form.model || this.form.model.length <=0) {
    this.error.model = "Model is required";
    return false;
  }
  else if (!this.form.color || this.form.color.length <=0) {
    this.error.color = "Color is required";
    return false;
  }
  else if (!this.form.price || this.form.price <=0) {
    this.error.price = "Price should be greater than 0";
    return false;
  }
  else { this.error.name = ''; this.error.color='';}

 
  return true;
}


}
