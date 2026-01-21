import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-re-use',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './re-use.component.html',
  styleUrl: './re-use.component.scss'
})
export class ReUseComponent {
  isSubmitting = false;

  handleSubmit(): void {
    console.log('Submit button clicked');
    this.isSubmitting = true;
  }

  handleCancel(): void {
    console.log('Cancel button clicked');
  }

}
