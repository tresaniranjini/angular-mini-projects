import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  orders = [
    { id: 1, product: 'Laptop' },
    { id: 2, product: 'Phone' },
    { id: 3, product: 'Tablet' },
  ];
}
