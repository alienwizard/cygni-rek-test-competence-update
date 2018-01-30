import { Component } from '@angular/core';
import DinoService from 'app/dinos/dinos.service';

@Component({
  moduleId: module.id,  
  selector: 'dino-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export default class DinoHeader {
  constructor(private dinoService: DinoService) {
    console.log('constructed')
  }
  prevPage() {
    console.log('prevPage')
  }
}