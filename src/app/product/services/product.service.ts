import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { Brand } from '../models/brand';
import { HttpClient } from '@angular/common/http'; // For angular4 Interceptor

import { HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '../../auth/services/HttpClient'; //without using Interceptor

@Injectable()
export class ProductService {


  endPoint : string = environment.securedApiEndPoint;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // return this.http.get(this.endPoint + '/products');
    //For Angular 4 with Interceptors
    return this.http.get<Product[]>(this.endPoint + '/products');

    // return this.http.get(this.endPoint + '/products').map((response: Response) => {
    //   console.log('Request received')
    //   console.log(response);
    //   return response.json();
    // });
  }

  getBrands() :Observable<Brand[]> {

    //For Angular 4 with Interceptors
    return this.http.get<Brand[]>(this.endPoint + '/brands');
    // return this.http.get(this.endPoint+ '/brands').map((response: Response) => {
    //   return response.json();
    // });
  }

  getProduct(id: number) :Observable<Product> {

    //For Angular 4 with Interceptors
    return this.http.get<Product>(this.endPoint + '/products/'+ id);

    // return this.http.get(this.endPoint+ '/products/'+ id).map((response: Response) => {
    //   return response.json();
    // });
  }

      //PUT /api/products/1
    //Content-Type: application/json
    //{{data}}
    saveProduct(product: Product) {
    //   let headers: Headers = new Headers({
    //       "Content-Type": "application/json"
    //   });

    //   let requestOptions = new RequestOptions({
    //     'headers': headers
    // });

      //For Angular 4 Http interceptors
      let httpHeaders: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json"
    });
    let requestOptions = {'headers': httpHeaders};


      let jsonDataText = JSON.stringify(product);

      if (product.id) {
          //PUT /api/products/1

          //For Angular 4 with Interceptors
    return this.http.put<Product>(this.endPoint + '/products/' + product.id, 
                                  jsonDataText,
                                requestOptions);

          // return this.http.put(this.endPoint + "/products/" + product.id,
          //     jsonDataText,
          //     requestOptions
          // )
          // .map( (response : Response ) => response.json());
      } else {
          //POST /api/products

          //For Angular 4 with Interceptors
        return this.http.post<Product>(this.endPoint + '/products', jsonDataText, requestOptions);
          // return this.http.post(this.endPoint + "/products",
          //     jsonDataText,
          //     requestOptions
          // )
          // .map( (response : Response ) => response.json())
      }
  }

  deleteProduct(id: any) {
    //For Angular 4 with Interceptors
    return this.http.delete(this.endPoint + '/products/'+ id);

      // return this.http.delete(this.endPoint + "/products/" + id)
            //  .map( (response : Response ) => response.json())
  }

  searchProducts(q: string)   {
    //For Angular 4 with Interceptors
    return this.http.get<Product[]>(this.endPoint + '/products?q=' + q);
      //  return this.http
      //         .get(this.endPoint + "/products?q=" + q)
      //         .map( (response: Response) => response.json())
  }

}
