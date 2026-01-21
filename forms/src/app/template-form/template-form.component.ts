import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService, User } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  user: User = {
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

  users: User[] = [];   // To store users fetched from the service
  editIndex: number | null = null;

  constructor(private userDataService: UserService) {

    // Initialize users from the service
    this.users = this.userDataService.getUsers();
    
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const userCopy = { ...this.user };
      if (this.editIndex !== null) {


        this.userDataService.editUser(this.editIndex, userCopy);
        console.log('User updated:', userCopy);
      } else {


        this.userDataService.addUser(userCopy);
        console.log('User submitted:', userCopy);
      }


      this.users = this.userDataService.getUsers();
      console.log('All users in service:', this.users);


      this.resetForm(form);
    } else {
      console.log('Form is invalid:', form.errors);
    }
  }

  editUser(index: number) {
    // Get the user to edit
    const userToEdit = this.userDataService.getUserByIndex(index);
    if (userToEdit) {
      this.user = { ...userToEdit };
      this.editIndex = index;
    }
  }

  removeUser(index: number) {
    this.userDataService.removeUser(index);
    this.users = this.userDataService.getUsers();
  }

  resetForm(form: NgForm) {
    form.reset();
    this.user = {
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
    this.editIndex = null;
  }
}
