import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { forkJoin } from 'rxjs';

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
  photosArray: any[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const fetchData$ = this.api.fetchPhotoFromUnsplash();
    const fetchDataFromPexels$ = this.api.fetchPhotoFromPexels();

    forkJoin([fetchData$, fetchDataFromPexels$]).subscribe(
      ([data1, data2]) => {
        this.photosArray = [
          ...data1.map(
            (item: { urls: { regular: any }; src: { landscape: any } }) =>
              item.urls ? item.urls.regular : item.src.landscape
          ),
          ...data2.photos.map(
            (item: { src: { landscape: any } }) => item.src.landscape
          ),
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
