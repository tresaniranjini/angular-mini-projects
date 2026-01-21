import { Component, inject } from '@angular/core';
import { PostService, Post } from './post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-httprequest',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss']
})
export class HttprequestComponent {
  postService = inject(PostService);
  posts$: Observable<Post[]>; // Renamed to posts$ to indicate it's an Observable

  constructor() {
    this.posts$ = this.postService.getPosts(); // Assign the observable from the service
  }

  // trackBy function to optimize rendering with *ngFor
  trackById(index: number, post: Post): number {
    return post.id;
  }
}
