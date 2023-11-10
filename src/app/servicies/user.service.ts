import { Injectable } from '@angular/core';
import { JwtResponse, UserInfo, Users } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private tokenStorageService:TokenStorageService) {

  }

  APIBaseUrl = 'http://localhost:8080'

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.APIBaseUrl + '/users');
  }

  setUserToLocalStorage(jwtResponse: JwtResponse) {
    this.tokenStorageService.saveToken(jwtResponse.token);
    this.tokenStorageService.saveUsername(jwtResponse.username);
    this.tokenStorageService.saveAuthorities(jwtResponse.authorities);
    let _obj: UserInfo = {
      id: 0,
      username: jwtResponse.username,
      email: '',
      role: jwtResponse.authorities,
      status: false
    }
    localStorage.setItem('userData', JSON.stringify(_obj))
  }
}
