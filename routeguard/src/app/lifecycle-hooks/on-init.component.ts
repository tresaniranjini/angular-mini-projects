import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  template: `<p>OnInit Example: {{ message }}</p>`,
  standalone: true,
})
export class OnInitComponent implements OnInit {
  message = '';

  ngOnInit(): void {
    this.message = 'Component Initialized!';
    console.log('OnInit: Component has been initialized.');
  }
}
