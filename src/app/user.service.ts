import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './store/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://jsonplaceholder.typicode.com/users/';
  private userLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  fetchUserSrvc(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url+this.userLimit);
  }

  addUserSrvc(userItem: IUser) {
    return this.http.post(this.url, userItem);
  }

  removeUserSrvc(id:string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
