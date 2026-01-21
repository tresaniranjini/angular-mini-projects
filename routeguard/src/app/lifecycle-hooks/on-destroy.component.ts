import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  template: `<p>OnDestroy Example</p>`,
  standalone: true,
})
export class OnDestroyComponent implements OnDestroy {
  constructor() {
    console.log('OnDestroy: Component instance created.');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy: Component is about to be destroyed.');
  }
}
