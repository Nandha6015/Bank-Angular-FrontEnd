import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _URL: string = 'http://localhost:8089';
  constructor(private http: HttpClient) {}
  save(us: User): Observable<User> {
    return this.http.post<User>(`${this._URL}/send`, us);
  }
  login(us: User): Observable<User> {
    return this.http.post<User>(`${this._URL}/login`, us);
  }
  // profile(user2: User):Observable<User> {
  //   return this.http.get<User>(`${this._URL}/send/{emailid}`)
  // }
  findOne(emailid: string): Observable<User> {
    return this.http.get<User>(`${this._URL}/send/{emailid}`);
  }
}
