declare const module: any;
import DinoService from 'app/dinos/dinos.service';
import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Dino} from 'app/dinos/dinos.types';

@Component({
  moduleId: module.id,  
  selector: 'dino-detail',
  template: `<figure class="dino-figure" *ngIf="dino" [ngStyle]="{ 'color': 'pink', 'background-image': backgroundImage()}"><h1>yoo</h1></figure>`,
  styles: []
})

export default class DinoDetailComponent {
  @Input() dino: Dino
  get backgroundImage() {
    console.log(this.dino);
    return (
      this.dino.imageSrc
    )
  }
}