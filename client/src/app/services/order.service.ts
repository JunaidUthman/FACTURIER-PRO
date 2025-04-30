import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.service';
import { Product } from './product.service';

const API_URL = 'http://localhost:5000/api';

export interface OrderItem {
  product?: string | Product;
  productId?: string;
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Order {
  _id?: string;
  customer: string | Customer;
  date: Date;
  products: OrderItem[];
  subtotal: number;
  tax: number;
  grandTotal: number;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_URL}/orders`);
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${API_URL}/orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${API_URL}/orders`, order);
  }

  updateOrder(id: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`${API_URL}/orders/${id}`, order);
  }

  deleteOrder(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${API_URL}/orders/${id}`);
  }
}
