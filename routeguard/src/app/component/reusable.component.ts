import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reusable',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="reusable">{{ content }}</div>`,
  styles: [`.reusable { border: 1px solid #ccc; padding: 8px; }`]
})
export class ReusableComponent {
  @Input() content: string = 'Reusable Component Content';
}
