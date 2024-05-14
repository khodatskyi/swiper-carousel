export interface UnsplashPhoto {
  alt_description: string;
  alternative_slugs: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
    ja: string;
    ko: string;
    pt: string;
  };
  asset_type: string;
  blur_hash: string;
  breadcrumbs: {}[];
  color: string;
  created_at: string;
  current_user_collections: {}[];
  description: string;
  downloads: number;
  exif: {
    aperture: string;
    exposure_time: string;
    focal_length: string;
    iso: number;
    make: string;
    model: string;
  };
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  location: {
    city: string | null;
    country: string;
    name: string | null;
    position: {
      latitude: number;
      longitude: number;
    };
  };
  promoted_at: string | null;
  slug: string;
  sponsorship: null | string;
  topic_submissions: {
    nature: { status: string };
    spirituality: { status: string; approved_on: string };
    ugc: { status: string };
    wallpapers: { status: string };
  };
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    accepted_tos: boolean;
    bio: string;
    first_name: string;
    for_hire: boolean;
    id: string;
    instagram_username: null | string;
    last_name: string;
    links: {
      followers: string;
      following: string;
      html: string;
      likes: string;
      photos: string;
      portfolio: string;
      self: string;
    };
    location: string;
    name: string;
    portfolio_url: string | null;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
    social: {
      instagram_username: string;
      paypal_email: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
    };
    total_collections: number;
    total_illustrations: number;
    total_likes: number;
    total_photos: number;
    total_promoted_illustrations: number;
    total_promoted_photos: number;
    twitter_username: string | null;
    updated_at: string;
    username: string;
  };
  views: number;
  width: number;
}

export interface PexelsPhoto {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
  url: string;
  width: number;
}

export interface PexelsPhotoCollection {
  next_page: string;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
}

export interface PhotoInfo {
  description: string;
  url: string;
  creatorName: string;
  color: string;
  comment: string;
  detailedDescription: string;
}
