import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[fpPermissions]'
})
export class PermissionsDirective implements OnInit{

  @Input() fpPermissions!: string;

  constructor(private _template: TemplateRef<any>, private _vcr: ViewContainerRef, private _auth: AuthService) {

    console.log(_template)
  }

  ngOnInit() {

    this._auth.isLoggedin$.subscribe(isLoggedIn => {
      this._vcr.clear();
      if(isLoggedIn && this.fpPermissions && this.fpPermissions === 'admin') {
        this._vcr.createEmbeddedView(this._template, {
          test: 'test'
        })
      }
    })

  }

}
