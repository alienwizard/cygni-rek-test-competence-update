import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { DinoActionTypes } from './../actions/dino';
import { Request,  RequestComplete} from '../actions/dino';
import { Observable } from 'rxjs/Observable';
// import { Dino } from 'app/dinos/dinos.types';
import DinoService from '../dinos.service';
import { Action } from '@ngrx/store';

@Injectable()
export default class DinoEffects {
  @Effect() dinos$: Observable<Action> = this.actions$
    .ofType<Request>(DinoActionTypes.Request)
    .map((action) => action.payload)
    .switchMap(query => {
      return this.dinoService.getDinos(query)
      .map((dinos) => {
        return new RequestComplete(dinos)
      });
    })
  constructor(
    private actions$: Actions<any>,
    private dinoService: DinoService
  ) {}

}