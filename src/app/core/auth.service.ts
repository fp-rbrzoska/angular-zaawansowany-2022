import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authSubj  = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this._authSubj.value;
  }

  isLoggedin$ = this._authSubj.asObservable()

  constructor(private _router: Router) { }

  logIn() {
    this._authSubj.next(true);
  }

  logOut() {
    this._authSubj.next(false);
    this._router.navigateByUrl('/')
  }
}
