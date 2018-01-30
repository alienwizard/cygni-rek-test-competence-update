import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { APP_CONFIG, AppConfig } from 'app/app.config';

@Injectable()
class DinoService {
  currentPage: null | number;
  totalPages: null | number;
  perPage: null | number;
  dinoData;
  url: string;
  token: string;
  http: HttpClient;
  constructor(@Inject(APP_CONFIG) config: AppConfig, private HttpClient: HttpClient) {
    console.log('yooo');
    this.url = config.apiEndPoint;
    this.token = config.token;
    this.http = HttpClient;
    this.currentPage = 1;
    this.perPage = 50;
  }
  public getDinos(): Observable<any> {
    return this.http.get(this.url + this.token + '&per_page' + this.perPage + '&page=' + this.currentPage)
    .pipe(
      catchError(this.handleError('getAllDinos', []))
    );
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