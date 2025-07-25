import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  backimageUrl: string;
  link:string;
  slug: string;
  category: string;
  shortDescription: string;
  sections: any; // ou Array<{ title: string, content: string }>
  metaTitle: string;
  metaDescription: any;
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 private apiUrl = 'http://localhost:8080/api/Services';

  constructor(private http: HttpClient) { }
    getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }
  addService(serv: Service): Observable<Service> {
      return this.http.post<Service>(this.apiUrl, serv);
    }
}
