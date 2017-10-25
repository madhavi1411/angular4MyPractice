import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members: string[] = ['Member 1', 'Member 2'];
  show: boolean = true;

  memberName: string;

  constructor() { }

  ngOnInit() {
  }
  
  add() {
    this.members.push(this.memberName);
    this.memberName = '';
  }

  empty() {
    // this.members = [];
    this.members.splice(0, this.members.length);
  }

}
