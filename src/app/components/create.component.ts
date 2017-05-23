import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

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

  poll: Poll;
  questions: Question;
  optionChoice: OptionChoice;
  user: User;

  // Хуудас ачааллахад хамгийн эхэнд ажиллах функц
  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));

    this.poll = {
      pollName: null,
      questions: this.questions,
      createdDate: null,
      user: this.user,
      active: true,
      userRoleId: [
        null
      ]
    };

    this.questions = [{
      questionId: null,
      questionName: null,
      questionDescription: null,
      type: null,
      optionChoices: this.optionChoices
    }];

    this.optionChoices = [{
      optionChoiceId: null,
      choiceName: null
    }];

    this.user = {
      userId: 1
    };
  };
}

interface Poll {
  pollName: String;
  questions: Question[];
  createdDate: Date;
  user: User;
  active: boolean;
  userRoleId: number[];
}

interface Question {
  questionId: number;
  questionName: String;
  questionDescription: String;
  type: String;
  optionChoices: OptionChoice[];
}

interface OptionChoice {
  optionChoiceId: number;
  choiceName: String;
}

interface User {
  userId: number;
}
