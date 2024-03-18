import { Component } from '@angular/core';
import { GreetingsComponent } from './components/greetings/greetings.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent],
  template: ` <isdi-greetings></isdi-greetings> `,
  styles: ``,
})
export class HomeComponent {}
