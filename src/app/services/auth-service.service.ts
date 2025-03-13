import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user?: User;

  constructor(private http: HttpClient) {}

  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  register(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:9009/register", user);
  }

  login(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:9009/login", user);
  }

  getToken(): boolean {
    if(localStorage.getItem('token')) return true;
    else return false;
  }

  logout() {
    localStorage.clear();
  }
}
