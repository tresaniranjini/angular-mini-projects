import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
})
export class EditDialogComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Data passed from the parent component
  ) {
    this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      phone: [data.phone, Validators.required],
    });
  }

  // Save changes and close the dialog
  save() {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }

  // Close the dialog without saving
  close() {
    this.dialogRef.close();
  }
}
