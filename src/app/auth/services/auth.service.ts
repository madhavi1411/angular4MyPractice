import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import {environment} from '../../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {


  //storing authentication token into sessionStorage
  // storage: Storage = window.sessionStorage;
//storing authentication token into sessionStorage
  storage: Storage = window.localStorage;
  constructor(private http: Http) { }

  isAuthenticated() : boolean {
    let token = this.storage.getItem('token');
    // if (!token) {
    //   return false;
    // }

    // return true;
    // tokenNotExpired(null, token);
    return !!token;

    
  }

  getToken() {
    return this.storage.getItem('token');
  }

  login(username: string, password: string) {
      let headers: Headers = new Headers({
          "Content-Type": "application/json"
      })

      let requestOptions = new RequestOptions({
          'headers': headers
      })

      const jsonData = {'username': username, 'password': password};

      let jsonDataText = JSON.stringify(jsonData);
      //POST /api/products
      return this.http.post(environment.authEndPoint,
      jsonDataText,
      requestOptions
    )
    .map( (response : Response ) => {
      let serverData = response.json();
      console.log(serverData);
      //todo: store token

      this.storage.setItem('token', serverData.token);
    });

  }

  logout() {

    this.storage.removeItem('token');
    this.storage.clear(); //clear all Items 
  }

}
