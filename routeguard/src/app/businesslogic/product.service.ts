// src/app/businesslogic/services/product.service.ts
import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 },
  ];

  // Get the list of products
  getProducts(): Product[] {
    return this.products;
  }

  // Add a new product
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Calculate total price of all products
  calculateTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
