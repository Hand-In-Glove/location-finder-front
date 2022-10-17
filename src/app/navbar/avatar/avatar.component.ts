import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { LocalStorageService } from 'src/app/_services/local-storage.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  logout() {
    console.log('LOGOUT TRIGGERED');
    this.authService.logout().subscribe({
      next: async (res) => {
        console.log(res);
        if (res.status === 200) {
          this.authService.user.next(null);
          this.storageService.clean();
          this.router.navigate(['/']);
        }
      },
      error: (err) => console.log('There was an error: ', err),
    });
  }
}
