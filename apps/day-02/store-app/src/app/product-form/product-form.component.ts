import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  showMessage = false;

  @Output() productCreated = new EventEmitter<Product>();

  constructor() {
    this.initProduct();
  }

  ngOnInit() {}

  onSave(e) {
    console.log('product:', this.product);
    this.productCreated.emit(this.product);

    this.initProduct();

    // Option 1
    // const obj = this;

    // this.showMessage = true;
    // setTimeout(function() {
    //   obj.showMessage = false;
    //   console.log('callback this pointer:', this);
    //   console.log('show message variable reset to false');
    // }, 3000);

    // Option 2
    // this.showMessage = true;
    // setTimeout(function() {
    //   this.showMessage = false;
    //   console.log('callback this pointer:', this);
    //   console.log('show message variable reset to false');
    // }.bind(this), 3000);

    // Option 3
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
      console.log('callback this pointer:', this);
      console.log('show message variable reset to false');
    }, 3000);
  }

  private initProduct() {
    this.product = {
      id: 0,
      name: '',
      description: '',
      isAvailable: false,
      price: 0
    };
  }
}
