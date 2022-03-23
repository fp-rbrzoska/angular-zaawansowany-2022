import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'fp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }

}
