import {Component, Input, OnInit} from '@angular/core';
import {ValueModel} from "../model/value.model";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() value: ValueModel;

  ngOnInit(): void {
  }

}
