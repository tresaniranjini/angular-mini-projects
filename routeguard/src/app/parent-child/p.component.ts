import { Component } from '@angular/core';
import { CComponent } from "./c.component";

@Component({
  selector: 'app-p',
  template: `
    <h1>Parent Component</h1>
    <p>Message from Child: {{ messageFromChild }}</p>
    <app-c
      [parentMessage]="messageToChild"
      (childEvent)="handleChildEvent($event)"
    ></app-c>
  `,
  standalone: true,
  imports: [CComponent],
})
export class PComponent {
  messageToChild = 'Hello from Parent!';
  messageFromChild = '';

  handleChildEvent(eventData: string): void {
    this.messageFromChild = eventData;
  }
}
