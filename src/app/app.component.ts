import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <p>Email: {{email}}</p>`
})
export class AppComponent {
  name = 'Tushig';
  email = 'tushig.0803@gmail.commm';
}
