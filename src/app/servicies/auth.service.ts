import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtResponse, UserCred, UserSignIn } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIBaseUrl = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient) {
  }

  userLogin(userCred: UserCred): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.APIBaseUrl + '/signin', userCred, httpOptions);
  }

  userRegistration(userSignIn: UserSignIn): Observable<string> {
    return this.http.post<string>(this.APIBaseUrl + '/signup', userSignIn, httpOptions);
  }
}
