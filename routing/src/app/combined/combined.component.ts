import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-combined',
  standalone: true,
  imports: [HeaderComponent,ProductsComponent,ServicesComponent],
  templateUrl: './combined.component.html',
  styleUrl: './combined.component.scss'
})
export class CombinedComponent {

}
