import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
    console.log('UserService Initialized...')
  }

  getAllUsers() {
    return this.http.get('http://localhost:8080/api/users')
      .map(res => res.json());
  }

  insertUser(user: Object) {
    var json = JSON.stringify(user);
    console.log(json);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:8080/api/users/", json, {
      headers: headers
    })
      .map(res => res.json());
  }

  apiLogin(email: String, password: String) {
    var json = JSON.stringify({email: email, password: password});
    var headers = new Headers();
    console.log(json);
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:8080/api/users/login", json, {
      headers: headers
    })
      .map(res => res.json());
  }
}
