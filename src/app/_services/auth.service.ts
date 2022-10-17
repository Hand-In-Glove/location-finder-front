import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IUser, User } from '../_models/user.model';

interface LoginData {
  email: string;
  password: string;
}

interface SignupData extends LoginData {
  firstName: string;
  lastName: string;
  userName: string;
}

export interface AuthResponseData extends IUser {}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

  signup(data: SignupData) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/auth/signup', data, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        tap((res) => {
          if (res.body) {
            this.handleUser(
              res.body.email,
              res.body.id,
              res.body.userName,
              res.body.role,
              res.body.savedLocations,
              res.body.submittedLocations,
              res.body.firstName,
              res.body.lastName
            );
          }
        })
      );
  }

  login(data: LoginData) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/auth/login', data, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        tap((res) => {
          if (res.body) {
            this.handleUser(
              res.body.email,
              res.body.id,
              res.body.userName,
              res.body.role,
              res.body.savedLocations,
              res.body.submittedLocations,
              res.body.firstName,
              res.body.lastName
            );
          }
        })
      );
  }

  logout() {
    return this.http.get('http://localhost:3000/auth/logout', {
      observe: 'response',
      withCredentials: true,
    });
  }

  handleUser(
    email: string,
    id: string,
    userName: string,
    role: any,
    savedLocations: any[],
    submittedLocations: any[],
    firstName?: string,
    lastName?: string
  ) {
    const user = new User(
      email,
      id,
      userName,
      role,
      savedLocations,
      submittedLocations,
      firstName,
      lastName
    );
    console.log(`HANDLING USER: ${JSON.stringify(user)}`);
    this.user.next(user);
  }
}
