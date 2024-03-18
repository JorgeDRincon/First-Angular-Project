import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Contador: {{counter}} </h2>

      <button (click)="increaseDecreaseBy(-1)">-1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseDecreaseBy(+1)">+1</button>
    </div>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseDecreaseBy(value :number) :void {
    this.counter += value
  }

  resetCounter() :void {
    this.counter = 10
  }
}
