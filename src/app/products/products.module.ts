import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';

export const costamFactory = () => {}

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
