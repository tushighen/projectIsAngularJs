import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'about-item',
  template: `<h1>About Item Id: {{id}}</h1>`
})

export class AboutItemComponent implements OnInit, OnDestroy{
  id: any;
  paramsSub: any;

  constructor(private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramsSub = this.activateRoute.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
