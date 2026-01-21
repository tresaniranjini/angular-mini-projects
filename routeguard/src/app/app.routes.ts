import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './routeGuards/home/home.component';
import { LoginComponent } from './routeGuards/login/login.component';
import { ProtectedComponent } from './routeGuards/protected/protected.component';
import { AuthGuard } from './routeGuards/auth.guard';
import { CanDeactivateGuard } from './routeGuards/can-deactivate.guard';
import { ChildComponent } from './routeGuards/child/child.component';

import { UserDetailComponent } from './routeparams/user-detail/user-detail.component';
import { UserListComponent } from './routeparams/user-list/user-list.component';

import { OrderDetailComponent } from './routeresolver/order-detail/order-detail.component';
import { OrderListComponent } from './routeresolver/order-list/order-list.component';
import { OrderResolverService } from './routeresolver/order-resolver.service';

import { CatalogComponent } from './routenested/catalog/catalog.component';
import { CategoryComponent } from './routenested/category/category.component';
import { ProductDetailComponent } from './routenested/product-detail/product-detail.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
  },


  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },


  { path: 'orders', component: OrderListComponent },
  {
    path: 'orders/:id',
    component: OrderDetailComponent,
    resolve: { order: OrderResolverService }
  },
  { path: '', redirectTo: '/orders', pathMatch: 'full' },


  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {
        path: 'category/:categoryId',
        component: CategoryComponent,
        children: [
          {
            path: 'product/:productId',
            component: ProductDetailComponent,
          },
        ],
      },
    ],
  },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () => import('./preload/dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: { preload: true }
  },
  {
    path: 'admin',
    loadComponent: () => import('./preload/admin/admin.component').then(m => m.AdminComponent),
    data: { preload: false }
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },


  {
    path: 'dashboard',
    loadComponent: () => import('./lazyload/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./lazyload/setting/setting.component').then(m => m.SettingComponent)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
