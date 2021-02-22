import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

// @Injectable means this service is used for dependency injection
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }


  // GET request to localhost:8080/users
  // Observable takes an array of all the users to be returned
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // POST request to localhost:8080/users
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
