import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DbCommunicationService {
  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  addToCart(someID:string) {
    return this.http.get(`${this.uri}/items/`);
  }

  saveItem(item:any) {
    console.log(item)
    return this.http.post(`${this.uri}/items/save`,item);
  }

  getAllItems() {
    return this.http.get(`${this.uri}/items/getAll`)
  }
}
