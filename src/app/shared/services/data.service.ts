import { Injectable } from '@angular/core';
@Injectable() 
export abstract class DataServiceBase {
  abstract increment();  //abstract from typescript ES6 doesn't have support
  abstract getLikes() : number;

}


@Injectable() //this defines the below class as Service
export class DataService extends DataServiceBase {
  likes: number = 1000;

  increment() {
    this.likes++;
  }
  getLikes(): number {
    return this.likes;
  }

  constructor() { 
    super();
    console.log("data service created");
  }

}
