import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FpTestComponent } from './fp-test.component';

const routes: Routes = [
  {
    path: '', component: FpTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FpTestRoutingModule { }
