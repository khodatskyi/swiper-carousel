import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { forkJoin } from 'rxjs';
import { UnsplashPhoto, PexelsPhoto } from './interfaces/interface';
import { PhotoInfo } from './interfaces/interface';

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
  photosArray: PhotoInfo[] = [];
  isLoading: boolean = true;
  statusRequest: string = 'LOADING...';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const fetchDataFromUnsplash$ = this.api.fetchPhotoFromUnsplash();
    const fetchDataFromPexels$ = this.api.fetchPhotoFromPexels();

    forkJoin([fetchDataFromUnsplash$, fetchDataFromPexels$]).subscribe(
      ([receivedDataFromUnsplash, receivedDataFromPexels]) => {
        console.log('UNSPLASH:', receivedDataFromUnsplash);
        console.log('PEXELS:', receivedDataFromPexels);

        this.photosArray = [
          ...receivedDataFromUnsplash.map((item: UnsplashPhoto) => {
            return {
              description: item.alt_description,
              url: item.urls.regular,
              creatorName: item.user.name,
              color: item.color,
            };
          }),
          ...receivedDataFromPexels.photos.map((item: PexelsPhoto) => {
            return {
              description: item.alt,
              url: item.src.landscape,
              creatorName: item.photographer,
              color: item.avg_color,
            };
          }),
        ];
        console.log('Combined data:', this.photosArray);
        this.isLoading = false;
      },
      (error) => {
        this.statusRequest = 'We have an error';
      }
    );
  }
}
