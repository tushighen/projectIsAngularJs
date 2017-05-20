import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: '../templates/create.component.html',
  providers: [UserService]
})

export class CreateComponent {

  constructor(private userService: UserService,
              private router: Router) {
  }

  // Хуудас ачааллахад хамгийн эхэнд ажиллах функц
  ngOnInit() {

  }
}
