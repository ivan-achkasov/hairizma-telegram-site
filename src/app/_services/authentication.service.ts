import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../_models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  login(username: string, password: string): boolean {
    if(username === 'root' && password === 'root') {
      const user: User = {
        id: 1,
        username: username,
        password: password,
        firstName: "",
        lastName: "",
        token: ""
      }

      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);

      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
