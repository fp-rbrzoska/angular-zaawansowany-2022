import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FpTestRoutingModule } from './fp-test-routing.module';
import { FpTestService } from './fp-test.service';
import { FpTestComponent } from './fp-test.component';


@NgModule({
  declarations: [FpTestComponent],
  imports: [
    CommonModule,
    FpTestRoutingModule
  ],
  providers: [FpTestService]
})
export class FpTestModule { }
