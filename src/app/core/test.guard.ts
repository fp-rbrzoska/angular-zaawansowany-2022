import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._auth.isLoggedin$.pipe(map(isLoggedIn => {
      return isLoggedIn || this._router.parseUrl('/unauthorized')
    }));
  }

  canLoad() {
    return this._auth.isLoggedin$.pipe(take(1), map(isLoggedIn => {
      return isLoggedIn || this._router.parseUrl('/unauthorized')
    }))
  }

}
