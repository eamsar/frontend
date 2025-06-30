import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private API_URL = 'http://localhost:8080/api/contact';
  constructor(private http: HttpClient) {}

  sendContactForm(data: any) {
    return this.http.post(this.API_URL, data);
  }
}
