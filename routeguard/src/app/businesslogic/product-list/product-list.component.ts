import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products = this.productService.getProducts();
  totalPrice = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.calculateTotalPrice();
  }

  // Use the service to calculate total price
  calculateTotalPrice() {
    this.totalPrice = this.productService.calculateTotalPrice();
  }

  // Method to add a sample product
  addSampleProduct() {
    const newProduct = { id: 4, name: 'Product D', price: 250 };
    this.productService.addProduct(newProduct);
    this.products = this.productService.getProducts();
    this.calculateTotalPrice();
  }
}
