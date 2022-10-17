import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { LoginComponent } from './login/login.component';
import { NewLocationComponent } from './new-location/new-location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'explorer',
    component: ExplorerComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  { path: 'new-location', component: NewLocationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
