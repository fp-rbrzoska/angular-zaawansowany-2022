import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = 'token1234';

    request = request.clone({setHeaders: {Autorization: `Token ${token}`, Hello: 'World'}});
    return next.handle(request)
    .pipe(
      retry(2),
      catchError(this.handleError),
      tap(console.log)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
