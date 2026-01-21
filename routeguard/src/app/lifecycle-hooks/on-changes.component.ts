import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  template: `
    <p>OnChanges Example:</p>
    <p>Input value: {{ inputValue }}</p>
  `,
  standalone: true,
})
export class OnChangesComponent implements OnChanges {
  @Input() inputValue = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges: Input value changed.', changes);
  }
}
