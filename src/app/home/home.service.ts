import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  token = localStorage.getItem('access_token');

  headers = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`),
  };

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get('http://localhost:3000/post/all', this.headers);
  }

  likePost(id: number, userId: any) {
    return this.http
      .post(
        `http://localhost:3000/post/like/${id}`,
        {
          userId: userId,
        },
        this.headers
      )
      .subscribe();
  }
}
