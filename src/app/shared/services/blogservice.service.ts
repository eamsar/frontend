import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Blog {
  id?: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  link: string;
  date: string;
  type:string; // ⚠️ format YYYY-MM-DD
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:8080/api/blogs';

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog);
  }
   getLatestBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/latest`);
  }
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/only-blogs`);
  }
  getnews(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/only-news`);
  }
}

