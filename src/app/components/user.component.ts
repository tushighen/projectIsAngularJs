import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  template: `<h1>Hello {{firstName}}, {{lastName}}</h1>
<p>{{email}}</p>
<p>{{sex}}</p>
<p>id: {{role.id}}, name: {{role.name}}</p>
<div *ngFor="let user of users">
<h3>{{user.firstName}}, {{user.lastName}}, {{user.password}}, {{user.code}}, {{user.role}}, 
{{user.sex}}, {{user.dateOfBirth}}, {{user.id}}, {{user.email}}</h3>
</div>
`,
  providers: [UserService]
})
export class UserComponent {
  id: String;
  email: String;
  code: String;
  firstName: String;
  lastName: String;
  dateOfBirth: String;
  sex: String;
  password: String;
  role: userRole;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.id = '1';
    this.email = 'tushig.0803@gmail.com'
    this.code = 'B140920341';
    this.firstName = 'Tushig';
    this.lastName = 'Battumur';
    this.dateOfBirth = '1900/03/03'
    this.sex = 'male';
    this.password = 'tushig';
    this.role = {
      id: 1,
      name: 'admin'
    }

    this.userService.getAllUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    });

  }
}

interface userRole {
  id: number;
  name: String;
}

interface User {
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
