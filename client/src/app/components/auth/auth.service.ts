import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  _registerUser(data: any): Observable<Response> {
    // return this._http.post<Response>('/auth/register', data).pipe(catchError(this.handleError));
    return this._http.post<Response>('/auth/register', data);
  }


  _loginUser(data: any): Observable<any> {
    return this._http.post('/auth/login', data);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
    }
    return throwError('Something bad happened; please try again later.');
  }


  public testServer(): Observable<any> {
    return this._http.get('/auth/test');
  }

}
