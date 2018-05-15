import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders().append('auth', 'abcd123');
    const params = new HttpParams().set('name', 'hari');
    return this.httpClient.get<Product[]>(this.apiUrl, {
      headers: headers,
      params: params
    });
    // .catch(error => {
    //   // return Observable.throw(Observable.from({ customError: error}))
    // });
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
