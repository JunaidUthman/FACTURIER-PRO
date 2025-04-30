import { NgModule } from '@angular/core';
import { OrderService } from './services/order.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent,InvoiceFormComponent],
  imports: [BrowserModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule],
  providers: [CustomerService,ProductService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }