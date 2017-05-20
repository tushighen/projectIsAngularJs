import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login.component';
import { CreateComponent } from './components/create.component';
import { UserComponent } from './components/user.component';
import { PollComponent } from './components/poll.component';
import { routing, appRoutingProviders } from './app.routing';
import {AboutItemComponent} from "./components/aboutitem.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, LoginComponent, CreateComponent, UserComponent, AboutItemComponent ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
