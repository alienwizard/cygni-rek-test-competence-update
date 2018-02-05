import { Photo } from 'app/dinos/dinos.types';
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
  constructor(private HttpClient: HttpClient) {
    console.log('yooo', this.url);
    this.url = apiConfig.apiEndPoint;
    this.token = apiConfig.token;
    this.http = HttpClient;
    this.currentPage = 1;
    this.perPage = 50;
  }
  public getDinos(query?): Observable<any> {
    let params = '';
    if (query) {
      params = qs.stringify(query);
    }
    params = params ? params : ''
    console.log('url', this.url + this.token + params ? params : '', params);
    return this.http.get(this.url + this.token).map((res: flikrResponse) => res.photos )
  }
  public setPage(page: number) {
    this.currentPage = page;
    return this.http.get(this.url + this.token + '')
    .pipe(
      catchError(this.handleError('getAllDinos', []))
    );
  }
  public setVisible(visible: number) {
    return this.http.get(this.url + this.token)
    .pipe(
      catchError(this.handleError('getAllDinos', []))
    );
  }
  public getAllDinos(): Observable<any> {
    return this.http.get(this.url + this.token)
      .pipe(
        catchError(this.handleError('getAllDinos', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}

export default DinoService;