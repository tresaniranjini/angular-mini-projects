import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-display.component.html',
  styleUrl: './profile-display.component.scss'
})
export class ProfileDisplayComponent implements OnInit {
  amount = 1234.56;
  profile$!: Observable<Profile>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
      this.profile$ = this.profileService.getProfile();
  }
}
