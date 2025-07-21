import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl = 'http://localhost:8080/api/resumes'; // Your Spring Boot endpoint

  constructor(private http: HttpClient) {}

sendResume(data: {
  fullName: string;
  email: string;
  file: File;
  about?: string;
}): Observable<any> {
  const formData = new FormData();
  formData.append('file', data.file);
  formData.append('fullName', data.fullName);
  formData.append('email', data.email);
  if (data.about) {
    formData.append('about', data.about);
  }

  return this.http.post(this.apiUrl, formData);
}

}
