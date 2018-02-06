import { NgModule } from '@angular/core';
import DinosComponent from 'app/dinos/dinos.component';
import DinoDetailComponent from 'app/dinos/dino-detail/dino-detail.component';
import PaginationComponent from 'app/dinos/pagination/pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ 
    DinosComponent,
    DinoDetailComponent,
    PaginationComponent
  ],
  exports:   [ DinosComponent ],
})
export default class DinosModule { }