import { catchError, mergeMap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {
  token = localStorage.getItem('access_token');

  headers = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
  };
  constructor(private http: HttpClient) {}

  createPost(description: any, posterId: any) {
    return this.http
      .post(
        'http://localhost:3000/post/new',
        {
          description: description,
          posterId: posterId,
        },
        this.headers
      )
      .pipe(
        mergeMap((val) => {
          return of(val);
        }),
        catchError((err) => {
          return of(err.error);
        })
      );
  }
}
