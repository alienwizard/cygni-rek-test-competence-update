import { Action } from '@ngrx/store';
import { Dino } from 'app/dinos/dinos.types';

export enum DinoActionTypes {
  Request = '[Dino] Request',
  RequestComplete = '[Dino] Request Complete',
  RequestError = '[Dino] Request Error',
  Load = '[Dino] Load',
  SetPage = '[Dino] SetPage'
}

export type ParamType = {
  [index: string]: any
} | string | null

export class Request implements Action {
  readonly type = DinoActionTypes.Request;
  constructor(public payload?: ParamType) {}
}

export class RequestComplete implements Action {
  readonly type = DinoActionTypes.RequestComplete;
  constructor(public payload: Dino[]) {}
}
export class RequestError implements Action {
  readonly type = DinoActionTypes.RequestError;
  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = DinoActionTypes.Load;
  constructor(public payload: Dino) {}
}

export class SetPage implements Action {
  readonly type = DinoActionTypes.SetPage;
  constructor(public payload: number) {}
}

export type DinoActions = Request |  RequestComplete | RequestError | Load | SetPage;