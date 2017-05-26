import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: '../templates/create.component.html',
  providers: [UserService]
})

export class CreateComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  poll: Poll;
  question: Question;
  optionChoice: OptionChoice;
  user: User;

  // Хуудас ачааллахад хамгийн эхэнд ажиллах функц
  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));

    this.poll = {
      pollName: null,
      questions: [
        this.question
      ],
      createdDate: null,
      user: this.user,
      active: true,
      userRoleId: [
        null
      ]
    };

    this.question = {
      questionId: null,
      questionName: 'asd',
      questionDescription: 'asd',
      type: null,
      optionChoices: [
        this.optionChoice
      ]
    };

    this.optionChoice = {
      optionChoiceId: null,
      choiceName: null
    };

    this.user = {
      userId: 1
    };
  };

  addOptionChoice() {
    let optionChoice: OptionChoice;
    optionChoice = {
      optionChoiceId: null,
      choiceName: null
    };
    this.question.optionChoices.push(optionChoice);
    // console.log(optionChoice);
    console.log(this.question.optionChoices);
  };

  addQuestion() {
    let question: Question;
    question = {
      questionId: null,
      questionName: null,
      questionDescription: null,
      type: null,
      optionChoices: [
        this.optionChoice
      ]
    };
    this.poll.questions.push(question);
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
