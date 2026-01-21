// src/app/routeresolver/order-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class OrderResolverService implements Resolve<any> {
  constructor(private orderService: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = Number(route.paramMap.get('id'));
    return this.orderService.getOrderById(id);
  }
}
