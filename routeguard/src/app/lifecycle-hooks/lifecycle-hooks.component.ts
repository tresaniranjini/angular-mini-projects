import { CommonModule } from '@angular/common';
import { AfterViewInitComponent } from './after-view-init.component';
import { OnChangesComponent } from './on-changes.component';
import { OnDestroyComponent } from './on-destroy.component';
import { OnInitComponent } from './on-init.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lifecycle-hooks',
  template: `
    <h3>Lifecycle Hooks</h3>
    <app-on-init></app-on-init>
    <app-on-changes [inputValue]="parentValue"></app-on-changes>
    <app-after-view-init></app-after-view-init>
    <app-on-destroy *ngIf="showDestroyComponent"></app-on-destroy>
    <button (click)="toggleDestroyComponent()">Toggle OnDestroy</button>
    <button (click)="updateValue()">Update Input Value</button>
  `,
  standalone: true,
  imports: [OnInitComponent, OnChangesComponent, AfterViewInitComponent, OnDestroyComponent, CommonModule],
})
export class LifecycleHooksComponent {
  parentValue = 'Initial Value';
  showDestroyComponent = true;

  toggleDestroyComponent(): void {
    this.showDestroyComponent = !this.showDestroyComponent;
  }

  updateValue(): void {
    this.parentValue = 'Updated Value';
  }
}
