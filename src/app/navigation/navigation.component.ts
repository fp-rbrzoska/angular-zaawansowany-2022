import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'fp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn$: Observable<boolean>
  constructor(private _auth: AuthService) {
    this.isLoggedIn$ = _auth.isLoggedin$;
  }

  ngOnInit(): void {
  }

  logIn() {
    this._auth.logIn()
  }

  logOut() {
    this._auth.logOut()
  }

}
