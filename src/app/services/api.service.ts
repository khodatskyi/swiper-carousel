import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'https://api.unsplash.com/'
  private accessKey: string = environment.accessKey

  constructor(private http:HttpClient) { }


  fetchData() {
    const url = `${this.apiUrl}/photos/random?client_id=${this.accessKey}&orientation=landscape&count=10`;
    return this.http.get<any>(url);
  }
}
