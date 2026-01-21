import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, CatalogComponent ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categoryId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));
  }
}
