import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './explorer/map/map.component';
import { LocationInfoComponent } from './explorer/map/location-info/location-info.component';
import { ControlsComponent } from './explorer/controls/controls.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AvatarComponent } from './navbar/avatar/avatar.component';
import { LocationComponent } from './location/location.component';
import { ConfirmAddLocationComponent } from './explorer/map/confirm-add-location/confirm-add-location.component';
import { NewLocationComponent } from './new-location/new-location.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ExplorerComponent,
    AboutComponent,
    ProfileComponent,
    NavbarComponent,
    MapComponent,
    LocationInfoComponent,
    ControlsComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    PageNotFoundComponent,
    AvatarComponent,
    LocationComponent,
    ConfirmAddLocationComponent,
    NewLocationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
