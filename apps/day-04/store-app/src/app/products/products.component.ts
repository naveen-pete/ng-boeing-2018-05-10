import { Component, ViewChild, OnInit } from '@angular/core';
import { Product } from '../models/product';

import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  searchText = '';

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
