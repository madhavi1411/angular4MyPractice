import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LikesComponent } from '../../shared/components/likes/likes.component';
import { DataService } from '../../shared/services/data.service';
//if we want to access a dom element in typescript which is defined by # ref
//ViewChild -- 
//ElementRef

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [
    DataService //creates the dataservice on every load of the component.
  ]
})
export class ContactComponent implements OnInit {

  contactLikes: number = 1000;

  //access p1 here
  @ViewChild("p1")
  p1Element: ElementRef;

  @ViewChild("likesComp")
  likesCompElement: LikesComponent;

  constructor(private ds: DataService) {
    //cann't access p1Element here, because the view the still not build here.
    //we can access it in ngOnInit

    console.log("contact comp created with DataService")
   }

  ngOnInit() {
    this.p1Element.nativeElement.textContent = 'from Init';
  }

  callChild() {
    this.likesCompElement.byValue(123);
  }

}
