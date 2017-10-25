import { Component, OnInit, Output } from '@angular/core';


@Component({
    // custom html tag/name
    selector: 'product-app',
    // inline html into TS file
    templateUrl: './app.component.html',
    styleUrls: [
        'app.component.css'
    ]

})
export class AppComponent implements OnInit {
    title: String = 'MY FIRST APP';
    pageName: string = 'home';
    appName: String = "Product App";
    year: number = 2017;

    constructor() {
        console.log('AppComponent created');

    }

    // lifecycle method
    // view is loaded/ready
    ngOnInit() {
        console.log('App init');
        this.title = 'Product App 2';
    }

    
    onContactMessage(message: string) {
        alert("got the event from child to parent " + message);
    }


}
