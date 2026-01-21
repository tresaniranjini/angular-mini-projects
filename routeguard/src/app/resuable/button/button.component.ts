import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
