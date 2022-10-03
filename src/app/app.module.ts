import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './explorer/map/map.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LaybyInfoComponent } from './explorer/map/layby-info/layby-info.component';
import { ControlsComponent } from './explorer/controls/controls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    NavbarComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    LaybyInfoComponent,
    ControlsComponent,
  ],
  imports: [BrowserModule, GoogleMapsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
