import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/api/contacts'; // Adjust if needed

  constructor(private http: HttpClient) {}

  // Inline Contact interface
  sendContact(contact: {
    salutation: string;
    company?: string;
    phoneNumber?: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
}
