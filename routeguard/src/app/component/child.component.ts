import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ data }}</p>
    <button (click)="sendNotification()">Notify Parent</button>
  `
})
export class ChildComponent {
  @Input() data: string = '';
  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Message from Child Component');
  }
}
