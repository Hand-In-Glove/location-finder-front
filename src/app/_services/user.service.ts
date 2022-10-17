import { Injectable } from '@angular/core';
import { User } from '../_models/user.model';
import { LocalStorageService } from './local-storage.service';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: LocalStorageService) {}

  isLoggedIn() {
    const user: User = this.storageService.getUser();
    return !!user;
  }
}
