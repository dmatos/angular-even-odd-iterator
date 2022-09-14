import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() elementAdded = new EventEmitter<{value: number}>();
  @Output() counterStopped = new EventEmitter<{}>();
  counter = 1;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  onInterval(){
    this.counter++;
    console.log(this.counter);
    this.elementAdded.emit({value: this.counter});
  }

  start(){
    this.interval = setInterval(this.onInterval.bind(this), 1100);
  }

  stop(){
    clearInterval(this.interval);
    this.counterStopped.emit({});
    this.counter = 1;
  }

}
