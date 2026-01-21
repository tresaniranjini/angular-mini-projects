import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbComponent } from './dumb.component';

@Component({
  selector: 'app-smart',
  standalone: true,
  imports: [CommonModule, DumbComponent],
  template: `<app-dumb [info]="data"></app-dumb>`
})
export class SmartComponent {
  data = 'Data from Smart Component';
}
