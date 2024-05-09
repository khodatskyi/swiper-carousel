import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchPhotoFromUnsplash() {
    const url = `https://api.unsplash.com/photos/random?client_id=${environment.unsplashApiKey}&orientation=landscape&count=5`;
    return this.http.get<any>(url);
  }

  fetchPhotoFromPexels() {
    const url = `https://api.pexels.com/v1/curated?per_page=5`;
    return this.http.get<any>(url, { headers: {Authorization: environment.pexelsApiKey} });
  }
}
