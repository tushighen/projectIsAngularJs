import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: '../templates/about.component.html'
//   template: `<h1>About this app</h1>
// <div *ngFor="let user of users">
// <h3>{{user.firstName}}, {{user.lastName}}, {{user.password}}, {{user.code}}, {{user.role}},
// {{user.sex}}, {{user.dateOfBirth}}, {{user.id}}, {{user.email}}</h3>
// </div>`
  ,
  providers: [ UserService ]
})

export class AboutComponent {
  users: user[];
  hello: String = '';

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });
  }

  login() {
    this.hello = "tushigg";
  }
}

interface user {
  firstName: String;
  lastName: String;
  password: String;
  code: String;
  role: String;
  sex: String;
  dateOfBirth: number;
  id: number;
  email: String;
}
