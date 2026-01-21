import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`
})
export class ContentProjectionComponent { }
