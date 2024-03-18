import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Spiderman"
  public age: number = 24;

  get capitalizedName(): String {
    return this.name.toUpperCase();
  }

  getHeroDescription() : String {
    return `${this.name} - ${this.age}`
  }

  changeHeroName(): void {
    this.name = "Iron Man"
  }

  changeHeroAge(): void {
    this.age += 5
  }
}
