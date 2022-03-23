import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';
import { PermissionsDirective } from './permissions.directive';



@NgModule({
  declarations: [
    TestDirective,
    HighlightDirective,
    PermissionsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirective,
    HighlightDirective,
    PermissionsDirective
  ]
})
export class SharedModule { }
