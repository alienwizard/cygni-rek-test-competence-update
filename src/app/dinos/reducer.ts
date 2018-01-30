import { Action } from '@ngrx/store';

export const PAGE_INCREMENT = 'INCREMENT';
export const PAGE_DECREMENT = 'DECREMENT';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECIEVE_DATA = 'RECIEVE_DATA';
export const HANDLE_ERROR = 'HANDLE_ERROR';
 
export interface DinoState {
  data: {
    pageCurrent: number,
    per_page: number,
    dinos: any[]
  },
  isLoading: boolean,
  error: null | object

}

export default function dinoReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case PAGE_INCREMENT:
      return state + 1;

    case PAGE_DECREMENT:
      return state - 1;

    case REQUEST_DATA:
      return 0;
    case RECIEVE_DATA: 
      return null;
    case HANDLE_ERROR:
      return false;
    default:
      return state;
  }
}