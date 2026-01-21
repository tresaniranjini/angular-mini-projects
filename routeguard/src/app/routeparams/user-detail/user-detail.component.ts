import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
    });
  }
}
