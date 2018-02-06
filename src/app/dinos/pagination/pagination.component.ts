import { Store, select } from '@ngrx/store';
declare const module: any;
import {Component} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Request } from 'app/dinos/actions/dino';
import { Observable } from 'rxjs/Observable';
import * as clamp from 'lodash/clamp'
import { AppState } from 'app/app.module';
import { SetPage } from '../actions/dino';

@Component({
  moduleId: module.id,  
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export default class PaginationComponent {
  title: string
  page: number;
  pages: number;
  constructor(private store: Store<AppState>) {
    console.log('constructed')
    this.page = null;
    this.pages = null;
    this.title = 'The Testpage'
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
  firstPage() {
    this.store.dispatch(new SetPage({page: 0}))
  }
  prevPage() {
    this.selectPageValues();
    this.store.dispatch(new SetPage({page: clamp(this.page - 1, 0, this.pages)}))
  }
  nextPage() {
    this.selectPageValues();
    this.store.dispatch(new SetPage({page: clamp(this.page + 1, 0, this.pages)}));
  }
  lastPage() {
    this.selectPageValues();
    this.store.dispatch(new SetPage({page: this.pages}));
  }
  selectPageValues() {
    this.getCurrentPage().subscribe(data => this.page = data);
    this.getCurrentPages().subscribe(data => this.pages = data);
  }
}