import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <h2>Child Component</h2>
    <p>Message from Parent: {{ parentMessage }}</p>
    <button (click)="sendEventToParent()">Send Message to Parent</button>
  `,
  standalone: true,
})
export class CComponent {
  @Input() parentMessage = '';
  @Output() childEvent = new EventEmitter<string>(); 

  sendEventToParent(): void {
    this.childEvent.emit('Hello from Child!');
  }
}
