import { DinoState } from './dinos/reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import AppComponent from './app.component';
import sharedModule from './common/shared.module';
import DinosModule from 'app/dinos/dinos.module';
import dinoReducer from 'app/dinos/reducer';
import DinoEffects from './dinos/effects/dino';
import DinoService from 'app/dinos/dinos.service';

export type AppState = {
  dinos: DinoState
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    sharedModule,
    DinosModule,
    StoreModule.forRoot({ dinos: dinoReducer }),
    EffectsModule.forRoot([DinoEffects])   ,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  exports: [HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DinoService]
})
export default class AppModule { }