import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dumb',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Dumb Component: {{ info }}</p>`
})
export class DumbComponent {
  @Input() info: string = '';
}
