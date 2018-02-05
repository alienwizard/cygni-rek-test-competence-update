import { Store, select } from '@ngrx/store';
declare const module: any;
import {Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Photo} from 'app/dinos/dinos.types';
import { Request } from 'app/dinos/actions/dino';
import { DinoState } from './reducer';
import { Observable } from 'rxjs/Observable';
@Component({
  moduleId: module.id,  
  selector: 'dino-list',
  templateUrl: './dinos.component.html',
  styleUrls: ['./dinos.component.scss'],
})

@Component({
  moduleId: module.id,  
  selector: 'dino-list',
  templateUrl: './dinos.component.html',
  styleUrls: ['./dinos.component.scss'],
})
export default class DinosComponent implements OnInit {
  dinos: Observable<Photo[]>;
  JSON: JSON
  // @ts-ignore
  constructor(private store: Store<DinoState>) {
    (this.dinos as any) = store.pipe(select('dinos')).map((state: DinoState) => {
      return state.data && state.data.photo
    })
    this.JSON = JSON;
  }
  ngOnInit() {
    console.log('this', this.dinos);
    this.store.dispatch(new Request())
    /*
    this.dinoService.getAllDinos().subscribe((data) => {
      console.log(data);
      this.dinos = data.photos.photo
    });
    */
    // TODO: fix preloading of next page
    console.log('initiated')
  }
  prevPage() {
    console.log('prevPage')
  }
  onClickMe(dinos) {
    console.log('on click me', dinos)
  }
}