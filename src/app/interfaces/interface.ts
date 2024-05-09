export interface UnsplashPhoto {
  urls: {
    regular: string;
  };
}

export interface PexelsPhoto {
  src: {
    landscape: string;
  };
}

export interface PexelsPhotoCollection {
  photos: PexelsPhoto[];
}
