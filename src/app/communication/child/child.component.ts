import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  cv="";
  @Input() a="";

  @Output() e:EventEmitter<any>=new EventEmitter();

  send(){
    this.e.emit(this.cv)
  }

  ngOnInit(): void {
  }

}
