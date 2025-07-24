import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private http: HttpClient) {}

  translate(text: string, targetLang: string) {
    return this.http.post<{ translatedText: string }>(
      '/api/translate',
      { text, targetLang }
    );
  }
}