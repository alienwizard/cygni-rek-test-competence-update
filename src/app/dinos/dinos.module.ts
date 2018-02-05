import { NgModule } from '@angular/core';
import DinoHeader from './header/header.component';
import DinosComponent from 'app/dinos/dinos.component';
import DinoDetailComponent from 'app/dinos/dino-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ 
    DinosComponent,
    DinoHeader,
    DinoDetailComponent
  ],
  exports:   [ DinosComponent ],
})
export default class DinosModule { }