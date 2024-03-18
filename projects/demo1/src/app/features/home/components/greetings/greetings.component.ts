import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'isdi-greetings',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  template: `
    <p>hola {{ user.toLocaleUpperCase() }}</p>

    <div>
      <label>
        <span>Nombre de usuario</span>
        <input type="text" name="" [(ngModel)]="user" />
      </label>
    </div>
    <img
      [width]="size"
      [height]="size"
      [ngSrc]="avatar"
      alt="avatar aleatorio "
      priority="low"
    />

    <p>Edad: {{ age }} Años</p>
    <button (click)="age = age + 1">Cumpleaños</button>
    <button (click)="addSomeYears($event, 10)">Cumple 10 años</button>
    <button (click)="addSomeYears($event, 5)">Cumple 5 años</button>
  `,
  styles: ``,
})
export class GreetingsComponent {
  user = 'pepe';
  avatar =
    'https://upload.wikimedia.org/wikipedia/en/5/58/TheOffice_S7_DVD.jpg';
  size = 100;
  age = 34;

  addSomeYears(event: Event, value: number) {
    console.log(event);

    this.age = this.age + value;
  }
}
