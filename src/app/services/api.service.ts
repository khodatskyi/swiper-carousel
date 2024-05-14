import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UnsplashPhoto, PexelsPhotoCollection } from '../interfaces/interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchPhotoFromUnsplash(): Observable<UnsplashPhoto[]> {
    const url = `https://api.unsplash.com/photos/random`;
    const params = new HttpParams()
      .set('client_id', environment.unsplashApiKey)
      .set('orientation', 'landscape')
      .set('count', '5');

    return this.http.get<UnsplashPhoto[]>(url, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching photos from Unsplash:', error);
        return throwError(error);
      })
    );
  }

  fetchPhotoFromPexels(): Observable<PexelsPhotoCollection> {
    const url = `https://api.pexels.com/v1/curated`;
    const params = new HttpParams().set('per_page', '5');

    return this.http
      .get<PexelsPhotoCollection>(url, {
        headers: { Authorization: environment.pexelsApiKey },
        params,
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching photos from Pexels:', error);
          return throwError(error);
        })
      );
  }
}
