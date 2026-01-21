import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { FormComponent } from './feature/form/form.component';
import { SharedComponent } from './shared/shared.component';



export const routes: Routes = [
  { path: '', redirectTo: '/shared', pathMatch: 'full' },
  { path: 'shared', component: SharedComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: FormComponent }
];
