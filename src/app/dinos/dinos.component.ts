declare const module: any;
import DinoService from 'app/dinos/dinos.service';
import {Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Dino} from 'app/dinos/dinos.types';

@Component({
  moduleId: module.id,  
  selector: 'dino-list',
  templateUrl: './dinos.component.html',
  styleUrls: ['./dinos.component.scss'],
})
export default class DinosComponent implements OnInit {
  dinos: Dino[];
  // @ts-ignore
  constructor(private dinoService: DinoService) {
    console.log('constructed')
  }
  ngOnInit() {
    this.dinoService.getAllDinos().subscribe((data) => {
      console.log(data);
      this.dinos = data.photos.photo
    });
    // TODO: fix preloading of next page
    console.log('initiated')
  }
}