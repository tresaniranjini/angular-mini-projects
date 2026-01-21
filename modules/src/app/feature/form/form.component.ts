import { Component } from '@angular/core';
import { SharedButtonComponent } from '../../shared/shared-button/shared-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ SharedButtonComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
