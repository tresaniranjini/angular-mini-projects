import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { CombinedComponent } from './combined/combined.component';

export const routes: Routes = [
    { path: 'header', component: HeaderComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'combined', component: CombinedComponent },
  { path: '', redirectTo: '/combined', pathMatch: 'full' }
];
