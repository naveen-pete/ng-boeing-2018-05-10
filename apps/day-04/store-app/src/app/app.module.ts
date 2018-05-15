import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { LoggerService } from './services/logger.service';
import { ProductsService } from './services/products.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    ProductDetailComponent,
    ProductFormComponent,
    SearchPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
