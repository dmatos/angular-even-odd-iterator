import {Component, Input, OnInit} from '@angular/core';
import {ValueModel} from "../model/value.model";

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() value: ValueModel;

  ngOnInit(): void {
  }

}
