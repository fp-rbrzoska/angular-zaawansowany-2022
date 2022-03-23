import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CONFIG_TOKEN } from '../tokens';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

export const myFactory = (router: Router) => new AuthService(router)

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    { provide: 'TEST', useValue: { myObj: 'test' }},
    { provide: CONFIG_TOKEN, useValue: { configObj: 'test' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configObj: 'test1' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configObj: 'test2' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configObj: 'test3' }, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
