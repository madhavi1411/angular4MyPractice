import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';

import {Router, ActivatedRoute} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Brand } from '../../models/brand';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};  //Product is interface so not able to create a object so we use Elvis operator for the variables of Product
  brands: Brand[] = [];
  @ViewChild("productForm")
  form: NgForm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];

    if (id) { //edit
      this.productService.getProduct(id).subscribe( (product: Product) => {
        this.product = product;
      });

    } else {  //create

    }

    this.productService.getBrands().subscribe ( (brands: Brand[]) => {
      this.brands = brands;
    });
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe( (savedProduct: Product) => {
      //option1: continue working on the form
      this.product = savedProduct;
      this.form.reset(this.product);

      //or

      //option2: goto list page after successful save  -- we need to redirect to list page from the typescript class
      // this.router.navigate(["/products" , "list"]);

    });
  }

}
