import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CatalogComponent, CategoryComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  categoryId: number | null = null;
  productId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to the parent route's paramMap to get the categoryId
    this.route.parent?.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('categoryId'));
    });

    // Subscribe to the current route's paramMap to get the productId
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('productId'));
    });
  }
}
