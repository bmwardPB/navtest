import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subcompa',
  templateUrl: './subcompa.component.html',
  styleUrls: ['./subcompa.component.less']
})
export class SubcompaComponent implements OnInit {

  constructor() { }

  completed: boolean = false;


  ngOnInit(): void {
  }
}
