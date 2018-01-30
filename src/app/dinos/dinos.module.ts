import { NgModule } from '@angular/core';
import DinoHeader from './header/header.component';
import DinosComponent from 'app/dinos/dinos.component';
import DinoService from 'app/dinos/dinos.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ DinosComponent, DinoHeader ],
  exports:   [ DinosComponent ],
  providers: [DinoService]
})
export default class DinosModule { }