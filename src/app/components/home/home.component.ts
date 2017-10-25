import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceBase } from '../../shared/services/data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  // likes : number = 100;
  likes : number = 0;
  handle: any;

  title: string = "Home Page";
  price: number = 89.98;
  releaseDate: Date = new Date();

  html : SafeHtml;
  
    constructor(private domSanitizer: DomSanitizer, private ds: DataServiceBase) { 
      console.log("home comp created, with injected DataServiceBase");
      this.likes = ds.getLikes();

    }
  
    ngOnInit() {
      // NORMAL WAY OF USING FUNCTIONS
      // var self = this;
      // setInterval( function() {
      //   console.log("timer called");
      //   self.likes++;
  
      // }, 2000)


      //DOM Sanitizer -- if you want execute your html tags -- Start
      // html code should be -- <div [innerHtml] = "html"> </div>
      let htmlText: string = "<h1> HELLO </h1>";
      this.html = this.domSanitizer.bypassSecurityTrustHtml(htmlText);
      //DOM Sanitizer -- End
  
      //USING ARROW OPERATOR
      this.handle = setInterval(() => {
        // this.likes++;
        this.ds.increment();
        this.likes = this.ds.getLikes();
        console.log("timer", this.likes);
      }, 2000);
    }
  
    increment() {
      // this.likes++;
      this.ds.increment();
      this.likes = this.ds.getLikes();
    }

    ngOnDestroy(): void {
      console.log('home on destroy');
      //clean timer
      clearInterval(this.handle);

    }
}
