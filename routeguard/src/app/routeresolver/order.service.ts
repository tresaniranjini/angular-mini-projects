// src/app/routeresolver/order.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders = [
    { id: 1, product: 'Laptop', quantity: 2, total: 1500 },
    { id: 2, product: 'Phone', quantity: 1, total: 800 },
    { id: 3, product: 'Tablet', quantity: 3, total: 1200 },
  ];

  getOrderById(id: number): Observable<any> {
    const order = this.orders.find(order => order.id === id);
    return of(order);
  }
}
