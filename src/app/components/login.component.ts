import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: '../templates/login.component.html',
  providers: [UserService]
})

export class LoginComponent {

  loginMessage: loginMessage;
  loginEmail: String;
  loginPassword: String;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    // localStorage.removeItem("currentUser");
    console.log(localStorage.getItem("currentUser"));
    console.log(sessionStorage.getItem("currentUser"));
  }

  loginRequest() {
    if (this.loginEmail != null && this.loginPassword != null) {
      this.userService.apiLogin(this.loginEmail, this.loginPassword).subscribe(msg => {
        this.loginMessage = msg;
        console.log(this.loginMessage.msg);
        console.log(this.loginMessage);

        if (this.loginMessage.msg == "Success") {
          localStorage.setItem("currentUser", JSON.stringify(this.loginEmail));
          sessionStorage.setItem("currentUser", JSON.stringify(this.loginEmail))
          this.router.navigate(['/login']);
        }
      });
    }
  }

  onKeyUp(email: String, password: String) {
    this.loginEmail = email;
    this.loginPassword = password;
  }
}

interface loginMessage {
  msg: String;
}
