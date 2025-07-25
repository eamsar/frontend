import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SearchResult {
  industries: any[];
  jobs: any[];
  services: any[];
  // add other categories if needed
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

search(query: string): Observable<SearchResult> {
// ✅ Full backend URL
return this.http.get<SearchResult>(`http://localhost:8080/api/search?keyword=${encodeURIComponent(query)}`);

}


}
