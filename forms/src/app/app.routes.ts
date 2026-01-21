import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ValidateFormComponent } from './validate-form/validate-form.component';

export const routes: Routes = [
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'validate-form' , component: ValidateFormComponent},
  { path: '', redirectTo: '/template-form', pathMatch: 'full' },
  { path: '**', redirectTo: '/template-form' }
];
