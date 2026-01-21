import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validate-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.scss']
})
export class ValidateFormComponent {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    website: '',
    hosting: '',
    description: ''
  };

  onSubmit() {
    console.log(this.contact);
  }
}
