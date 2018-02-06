declare const module: any;
import DinoService from 'app/dinos/dinos.service';
import {Component, Input} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Photo} from 'app/dinos/dinos.types';

@Component({
  moduleId: module.id,  
  selector: 'dino-detail',
  template: `<figure class="dino-figure" *ngIf="dino" [ngStyle]="getbackgroundImage()"></figure>`,
  styleUrls: ['./dino-detail.component.scss'],

})

// TODO: add placeholder for loading bigger images
export default class DinoDetailComponent {
  @Input() dino: Photo
  getbackgroundImage() {
    const {
      farm,
      server,
      id,
      secret
    } = this.dino
    return { 'background-image': `url('https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_c.jpg')`}
  }
}