import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { forkJoin } from 'rxjs';
import { UnsplashPhoto, PexelsPhoto } from './interfaces/interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'swiper-carousel';
  photosArray: string[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const fetchData$ = this.api.fetchPhotoFromUnsplash();
    const fetchDataFromPexels$ = this.api.fetchPhotoFromPexels();

    forkJoin([fetchData$, fetchDataFromPexels$]).subscribe(
      ([data1, data2]) => {
        console.log('UNSPLASH:', data1);
        console.log('PEXELS:', data2);

        this.photosArray = [
          ...data1.map((item: UnsplashPhoto) => item.urls.regular),
          ...data2.photos.map((item: PexelsPhoto) => item.src.landscape),
        ];
        console.log('Combined data:', this.photosArray);
        this.isLoading = false;
      },
      (error) => {
        console.error('We have an error', error);
        this.isLoading = false;
      }
    );
  }
}
