import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router, ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'user',
  template: `
<div *ngFor="let user of users">
<h3>{{user.firstName}}, {{user.lastName}}, {{user.password}}, {{user.code}}, {{user.role}}, 
{{user.sex}}, {{user.dateOfBirth}}, {{user.id}}, {{user.email}}</h3>
</div>
`,
  providers: [UserService]
})


export class UserComponent {

  ngOnInit() {
    // localStorage.removeItem("currentUser");
    console.log(localStorage.getItem("currentUser"));
    console.log(sessionStorage.getItem("currentUser"));

    if (localStorage.getItem("currentUser") == null) {
      this.router.navigate(['/login']);
    }
  }

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

  constructor(private userService: UserService, private router: Router) {
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
