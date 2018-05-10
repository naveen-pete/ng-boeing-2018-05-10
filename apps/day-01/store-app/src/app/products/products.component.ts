import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  product: Product;
  today = Date.now();

  constructor() {
    this.product = {
      id: 1,
      name: 'Honor 9 Lite',
      description: 'Smart phone',
      price: 20000,
      isAvailable: true
    };
  }
}
