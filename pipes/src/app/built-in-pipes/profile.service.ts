import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from './profile.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Observable<Profile> {
      const profile: Profile = {
          name: 'tresa selvam',
          age: 25,
          registrationDate: new Date('2022-10-01'),
          balance: 1234.56,
      };
      return of(profile);
  }
}
