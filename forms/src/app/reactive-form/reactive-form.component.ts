import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService, User } from '../person.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'] 
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  users: User[] = []; 
  editIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService 
  ) {
    // Initialize the form
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      website: ['', Validators.required],
      hosting: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Initialize users from the service
    this.users = this.personService.getUsers();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userCopy: User = { ...this.userForm.value }; // Get form values
      if (this.editIndex !== null) {
        
        this.personService.editUser(this.editIndex, userCopy);
        console.log('User updated:', userCopy);
      } else {
        
        this.personService.addUser(userCopy);
        console.log('User submitted:', userCopy);
      }

      this.users = this.personService.getUsers();
      console.log('All users in service:', this.users);

      this.resetForm();
    } else {
      console.log('Form is invalid:', this.userForm.errors);
    }
  }

  editUser(index: number) {
 
    const userToEdit = this.personService.getUserByIndex(index);
    if (userToEdit) {
      this.userForm.patchValue(userToEdit); 
      this.editIndex = index; 
    }
  }

  removeUser(index: number) {
    this.personService.removeUser(index);
    this.users = this.personService.getUsers(); 
  }

  resetForm() {
    this.userForm.reset();
    this.editIndex = null; 
  }
}
