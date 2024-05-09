import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
  title = 'swiper-carousel';
  photosArray: any[] = []
  isLoading: boolean = true;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.fetchData().subscribe(
      (data: any[]) => {  
        this.photosArray = data.map(item => item.urls.regular);
        console.log('We received a data', this.photosArray);
        this.isLoading = false;
      },
      (error) => {
        console.error('We have an error', error);
        this.isLoading = false;
      }
    );
  }
}
