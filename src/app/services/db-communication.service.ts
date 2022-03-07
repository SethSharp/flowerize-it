import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DbCommunicationService {
  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addToCart(someID:string) {
    console.log("AYTO")
    return this.http.get(`${this.uri}/items/`);
  }
}
