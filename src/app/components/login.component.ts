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

  // Нэвтрэх хүсэлт явуулан буцаж ирэх мэссэжийг хадгалах объеът
  private loginMessage: loginMessage;
  // Нэвтрэх формын Email field-ийн утгыг авах хувьсагч
  private loginEmail: String;
  // Нэвтрэх формын Password field-ийн утгыг авах хувьсагч
  private loginPassword: String;
  // Хэрэглэгчийн хүйсийг хадгалах хувьсагч
  private gender: String;
  // Хэрэглэгчийн мэдээллийг хадгалах объект
  private user: User;
  // Хэрэглэгчийн Role-ийг хадгалах объект
  private userRole: UserRole;

  // DropDown Menu дээр харагдах Text болон Id
  private roles = [
    {text: "Student", value: 2},
    {text: "Teacher", value: 3},
  ];

  constructor(private userService: UserService,
              private router: Router) {
  }

  // Хуудас ачааллахад хамгийн эхэнд ажиллах функц
  ngOnInit() {
    // localStorage.removeItem("currentUser");
    console.log(localStorage.getItem("currentUser"));
    console.log(sessionStorage.getItem("currentUser"));
  }

  // Нэвтрэх хүсэлт
  loginRequest() {
    if (this.loginEmail != null && this.loginPassword != null) {
      this.userService.apiLogin(this.loginEmail, this.loginPassword).subscribe(msg => {
        this.loginMessage = msg;
        console.log(this.loginMessage.msg);
        console.log(this.loginMessage);

        if (this.loginMessage.msg == "Success") {
          localStorage.setItem("currentUser", JSON.stringify(this.loginEmail));
          sessionStorage.setItem("currentUser", JSON.stringify(this.loginEmail));
          this.router.navigate(['/login']);
        }
      });
    }
  }

  // Бүртгүүлэх хүсэлт
  registerRequest(email: String, code: String, firstName: String,
                  lastName: String, dateOfBirth: any, password: String) {
    this.user = {
      email: email,
      code: code,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      sex: this.gender,
      password: password,
      userRole: this.userRole
    };
    console.log(this.user);
    this.userService.insertUser(this.user).subscribe(msg => {
      console.log(msg);
    })
  }

  // Нэвтрэх формын нэр нууц үгийн event // TextBox: Email, Password
  onLoginKeyUp(email: String, password: String) {
    this.loginEmail = email;
    this.loginPassword = password;
  }

  // RadioButton дарагдахад хийгдэх функц
  onRadioClick(gender: String) {
    this.gender = gender;
  }

  // DropDown menu солигдоход хийгдэх функц
  onDropDownChange(id: number) {
    this.userRole = {
      userRoleId: id
    };
  }
}

// LoginRequest явуулахад буцаж ирэх Message -ийн класс
interface loginMessage {
  msg: String;
}

// User класс
interface User {
  email: String;
  code: String;
  firstName: String;
  lastName: String;
  dateOfBirth: any;
  sex: String;
  password: String;
  userRole: UserRole;
}

// UserRole класс - Хэрэглэгчийн Role-ийн тодорхойлолт, тусдаа объект
interface UserRole {
  userRoleId: number;
}
