import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 [class]="titleClass">Hello!!</h1>
  <h1 [class.yellow-title]="showClass">Hello Again!!</h1>
  <h1 class = "green-title"> Hello Once Again!! </h1>
  <h1 [ngClass]= "multiClass"> And Once again, but better size !!</h1>
  <h1 [style.color] = "styleBind ? 'pink' : 'green'"> Style bind conditionally </h1>
  `,
  styles: [`
  h1{
    text-decoration:underline;
  }
  .red-title {
    color: red;
  }
  .yellow-title {
    color: yellow;
  }

  .green-title {
    color: green;
  }

  .large-size {
    font-size:4em;
  }
  `]
})
export class AppComponent {
  title = 'project2';
  titleClass = 'red-title';
  showClass = true;
  multiClass = {
    'red-title' : true,
    'large-size' : true
  }

  styleBind = true;
  
}
