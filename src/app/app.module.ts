import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import AppComponent from './app.component';
import sharedModule from './common/shared.module';
import DinosModule from 'app/dinos/dinos.module';
import dinoReducer from 'app/dinos/reducer';
import { APP_CONFIG, apiConfig } from 'app/app.config';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    sharedModule,
    DinosModule,
    StoreModule.forRoot({ dinos: dinoReducer })   
  ],
  exports: [HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_CONFIG, useValue: apiConfig}]
})
export default class AppModule { }