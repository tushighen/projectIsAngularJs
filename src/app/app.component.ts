import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<router-outlet></router-outlet>
<ul>
<li><a routerLink = "/">Home</a></li>
<li><a routerLink = "/login">About</a></li>
</ul>
`
})
export class AppComponent {

}
