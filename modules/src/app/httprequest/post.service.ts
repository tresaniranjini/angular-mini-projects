import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  http = inject(HttpClient);

  constructor() {}


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error) => this.handleError(error))
    );
  }


  private handleError(error: any) {
    console.error('Error fetching posts:', error);
    return throwError(() => new Error('Something went wrong while fetching posts'));
  }


  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }
}
