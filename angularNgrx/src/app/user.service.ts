import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url);
  }

}
