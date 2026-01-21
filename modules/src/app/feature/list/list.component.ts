import { Component } from '@angular/core';
import { SharedComponent } from '../../shared/shared.component';
import { SharedButtonComponent } from '../../shared/shared-button/shared-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SharedButtonComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  users = ['Alice', 'Bob', 'Charlie'];

  addUser() {
    alert('User Added!');
  }
}
