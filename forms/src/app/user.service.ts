import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  website: string;
  hosting: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    console.log('User added to service:', user);
    console.log('Current user list in service:', this.users);
  }

  editUser(index: number, user: User) {
    if (this.users[index]) {
      this.users[index] = user;
      console.log('User updated in service:', user);
    }
  }

  removeUser(index: number) {
    if (this.users[index]) {
      this.users.splice(index, 1);
      console.log('User removed from service at index:', index);
    }
  }

  getUserByIndex(index: number): User | undefined {
    return this.users[index];
  }

  getUsers(): User[] {
    return this.users;
  }
}
