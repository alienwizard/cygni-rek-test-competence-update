import { Photo } from 'app/dinos/dinos.types';
import { DinoActionTypes, DinoActions } from './actions/dino';
 
export interface DinoState {
  data: {
    page: number,
    pages: number
    perpage: number,
    total: string,
    photo: Photo[]
  },
  isLoading: boolean,
  error: string

}

export default function dinoReducer(state: DinoState, action: DinoActions) {
  switch (action.type) {
    case DinoActionTypes.SetPage:
      return {
        ...state,
        data: {
          ...state.data,
          page: action.payload
        }
      };
    case DinoActionTypes.Request:
      return {
        ...state,
        isLoading: true
      };
    case DinoActionTypes.RequestComplete: 
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case DinoActionTypes.RequestError:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
