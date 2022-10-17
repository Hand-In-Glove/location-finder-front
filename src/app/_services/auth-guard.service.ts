import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('CAN ACTIVATE TRIGGERED');
    console.log('USER SERVICE: ', this.authService.user);
    // this.router.navigate(['/login']);
    // return false;
    return this.authService.user.pipe(
      map((user) => {
        console.log('MAPPENING IS HAPPENING');
        if (!!user) {
          console.log('USER LOGGED IN A BISH: ', user);
          return true;
        } else {
          console.log('REDIRECT A BISH');
          return this.router.createUrlTree(['/login']);
          // return false;
        }
      })
    );
  }
}
