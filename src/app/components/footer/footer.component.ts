import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  address : any = {city: 'BLR'};
  isMouseOn: boolean = false;

  @Input()
  year: number;

  @Input('app-name')
  appName: String;

  //child to parent
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //multiple subscribers can also be possible
    this.contactEvent.subscribe((msg) => console.log("message is  ", msg));
    this.contactEvent.subscribe((msg) => console.log("sub 2: message is  ", msg));
  }

  
  onContact() {
    //publish message
    this.contactEvent.emit("from Footer");
  }

}
