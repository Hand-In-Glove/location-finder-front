import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../_services/auth.service';
import { LocalStorageService } from '../_services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  shouldShowForm = false;
  mode: 'login' | 'signup' = 'login';
  isLoading = false;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  showForm() {
    this.shouldShowForm = true;
  }

  closeForm() {
    this.shouldShowForm = false;
  }

  setMode(mode: 'signup' | 'login') {
    this.mode = mode;
  }

  onSubmit(form: NgForm) {
    let authObs: Observable<HttpResponse<AuthResponseData>>;
    this.isLoading = true;
    if (!form.valid) return;
    if (this.mode === 'signup') {
      authObs = this.authService.signup(form.value);
    }
    if (this.mode === 'login') {
      authObs = this.authService.login(form.value);
    }

    authObs.subscribe({
      next: (res) => {
        console.log('RES: ', res);
        this.isLoading = false;
        this.storageService.saveUser(res.body);
        this.router.navigate(['/explorer']);
      },
      error: (res) => {
        console.log('Error: ', res.error);
        this.error = `${res.status}: ${res.error.message}`;
        this.isLoading = false;
      },
    });

    form.reset();
  }
}
