import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TestGuard } from './core/test.guard';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'contact', component: ContactComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: 'test', loadChildren: () => import('./fp-test/fp-test.module').then(m => m.FpTestModule), canActivate: [TestGuard], canLoad: [TestGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
