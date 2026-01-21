import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h2>Parent Component</h2>
    <app-child [data]="parentData" (notify)="receiveNotification($event)"></app-child>
  `
})
export class ParentComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  parentData = 'Data from Parent Component';

  ngOnInit() { console.log('ParentComponent: OnInit'); }
  ngOnChanges() { console.log('ParentComponent: OnChanges'); }
  ngAfterViewInit() { console.log('ParentComponent: AfterViewInit'); }
  ngOnDestroy() { console.log('ParentComponent: OnDestroy'); }

  receiveNotification(message: string) {
    console.log('Received from Child:', message);
  }
}
