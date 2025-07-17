import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id?: number;
  title: string;
  description: string;
  location: string;
  type: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:8080/api/joboffers';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }
}
