import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-outlet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #myTemplate let-message="message">
      <p>{{ message }}</p>
    </ng-template>

    <ng-container *ngTemplateOutlet="myTemplate;
    context: { message: 'Hello from Template Outlet!' }"></ng-container>
  `
})
export class TemplateOutletComponent { }
