import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input()
  count: number;

  //input name + change
  @Output()
  countChange : EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  up() {
    // this.count++;
    // this.countChange.emit(this.count);
    this.countChange.emit(this.count + 1);
  }

  down() {
    // this.count--;
    // this.countChange.emit(this.count);
    this.countChange.emit(this.count - 1);
  }

  //call from parent
  byValue(n: number) {
    this.countChange.emit(this.count + n);
  }
}
