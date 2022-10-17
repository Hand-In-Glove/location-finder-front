import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
}
