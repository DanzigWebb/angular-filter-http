import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  url = 'https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1'
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.url);
  }
}