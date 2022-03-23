import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get<any>('http://localhost:3000/products');
  }
}
