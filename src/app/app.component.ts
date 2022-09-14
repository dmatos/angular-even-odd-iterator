import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'even-odd-iterator';

  values: number[] = [];

  onIncrementaContador(data: {value: number}){
    this.values.push(data.value);
    console.log(this.values);
  }

  onCounterStopped(){
    this.values = [];
  }
}
