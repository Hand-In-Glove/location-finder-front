import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { LocalStorageService } from './_services/local-storage.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Hitching Post';
  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    if (user) this.authService.user.next(user);
  }
}
