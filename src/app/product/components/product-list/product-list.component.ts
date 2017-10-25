import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';

import {Response} from '@angular/http'
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription : Subscription;
  constructor(private productService: ProductService) { }
  message: string;
  ngOnInit() {
    // this.productService.getProducts().subscribe(
    //   (response: Response) => {
    //    console.log('Response', response);
    //    this.products = response.json();

    //   }); //.getProducts returns a Observable<Respose> , subscribe is for the sucess path

    this.subscription =  this.productService.getProducts().subscribe(
      (products: Product[]) => {
        console.log("Products list "+ products);
        this.products = products;
        console.log("Got products");
      }, 
      (error: Response) => {
        console.log("ERROR");
        this.message = `
          Server Error: ${error.status},
          Status Text: ${error.statusText}
          ` ;
      });
  }

  ngOnDestroy() { 
    this.subscription.unsubscribe();   // on navigation to some other page, and stop the request of the previous page, closing unnecessary calls, promise doesn't provide this.
  }
}
