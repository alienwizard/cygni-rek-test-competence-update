import { SetPage } from './../actions/dino';
import { Component } from '@angular/core';
import DinoService from 'app/dinos/dinos.service';
import { Store, select } from '@ngrx/store';
import { DinoState } from '../reducer';
import * as clamp from 'lodash/clamp'
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app.module';

@Component({
  moduleId: module.id,  
  selector: 'dino-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export default class DinoHeader {
  page: number;
  pages: number;
  constructor(private store: Store<AppState>) {
    console.log('constructed')
    this.page = null;
    this.pages = null;
  }

  getCurrentPage(): Observable<number> {
    return this.store.select('dinos')
    .filter(Boolean)
    .map(res => res.data.page)
  }

  getCurrentPages(): Observable<number> {
    return this.store.select('dinos')
    .filter(Boolean)
    .map(res => res.data.pages);
  }

  prevPage() {
    this.getCurrentPage().subscribe(data => {
      this.page = data
    });
    this.getCurrentPages().subscribe(data => this.pages = data);
    console.log('prevPage', this.page)
    // TODO: calculations on two observable values
    this.store.dispatch(new SetPage(clamp(this.page - 1, 0, this.pages)))
  }
  nextPage() {
    console.log('nextPage', this.page);
    this.getCurrentPage().subscribe(data => {
      this.page = data
    });
    this.getCurrentPages().subscribe(data => this.pages = data);
    console.log('nextPage', this.page, this.pages)
    // TODO: calculations on two observable values
    this.store.dispatch(new SetPage(clamp(this.page + 1, 0, this.pages)))
  }
}