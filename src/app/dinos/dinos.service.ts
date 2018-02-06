import { Photo, PhotoParams } from 'app/dinos/dinos.types';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as qs from 'qs';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import {apiConfig } from 'app/app.config';

type flikrResponse = {
  photos: Photo[];
}

@Injectable()
class DinoService {
  currentPage: null | number;
  totalPages: null | number;
  perPage: null | number;
  dinoData;
  url: string;
  token: string;
  http: HttpClient;
  defaulParams: PhotoParams;
  constructor(private HttpClient: HttpClient) {
    this.url = apiConfig.apiEndPoint;
    this.token = apiConfig.token;
    this.http = HttpClient;
    this.currentPage = 1;
    this.perPage = 50;
    this.defaulParams = {
      page: 1,
      per_page: 50
    }
  }
  public getDinos(query?): Observable<any> {
    let params = Object.assign({}, this.defaulParams, query);
    params = qs.stringify(params);
    params = params ? params : ''
    console.log('url params', params);
    return this.http.get(this.url + this.token + '&' + params).map((res: flikrResponse) => res.photos )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}

export default DinoService;