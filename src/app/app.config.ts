import { InjectionToken } from '@angular/core';

interface AppConfig {
  apiEndPoint: string;
  token: string;
}

const apiConfig: AppConfig = {
  apiEndPoint: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=dinosaurs&sort=interestingness-desc&safe_search=2&media=photos&format=json&nojsoncallback=1',
  token: '&api_key=e57f52bb5ed3d0a7d33519e8b354799a'
}

const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export {
  APP_CONFIG,
  apiConfig,
  AppConfig
}