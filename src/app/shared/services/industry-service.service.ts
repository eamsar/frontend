import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Industry {
  id?: number;
  name: string;
  description: Text;
  imageUrl: string;
  link: string;
  icon :string;
  backimageUrl:string
  sections:any
}
@Injectable({
  providedIn: 'root'
})
export class IndustryServiceService {
  private apiUrl = 'http://localhost:8080/api/Industries'; // Adjust if needed

  constructor(private http: HttpClient) {}
  getIndustries(): Observable<Industry[]>{
   return this.http.get<Industry[]>(this.apiUrl);
  }
  postIndustry(Ind :Industry): Observable<Industry>{
    return this.http.post<Industry>(this.apiUrl, Ind);
  }
}
