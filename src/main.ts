declare const PRODUCTION: string;
// @ts-ignore
declare const module: any;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from 'app/app.module';

import './styles/main.scss';

if (PRODUCTION) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);