import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Location } from 'src/app/_models/location.model';
// TODO: lift location data to explorer component
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input() shouldAddMarker: boolean;
  lat: number = 51.678418;
  lng: number = 7.809007;

  mapOptions: google.maps.MapOptions = {
    center: { lat: this.lat, lng: this.lng },
    zoom: 14,
    disableDoubleClickZoom: true,
  };

  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.BOUNCE,
    draggable: false,
  };

  userLocations: Location[] = [];

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  mockLaybyId = 0;

  locationToDisplay: Location | null = null;

  showAddConfirmation = false;
  infoWindowPosition: google.maps.LatLng = null;

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.mapOptions = {
            ...this.mapOptions,
            center: { lat: this.lat, lng: this.lng },
          };
        },
        (error) => console.log('ERROR: ', error)
      );
    } else {
      console.log('NO GEOLOCATION');
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.mapOptions.center = event.latLng?.toJSON();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.infoWindowPosition = event.latLng;
      this.showAddConfirmation = true;
      this.infoWindow.open();
    }
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
    const foundLocation = this.getLocationFromPosition(
      marker.getPosition()?.toJSON()
    );
    if (foundLocation) this.setLocationToDisplay(foundLocation);
  }

  setLocationToDisplay(location: Location) {
    this.locationToDisplay = location;
  }

  clearLocationToDisplay() {
    this.locationToDisplay = null;
  }

  getLocationFromPosition(position: google.maps.LatLngLiteral | undefined) {
    if (!position) return undefined;
    const foundLocation = this.userLocations.find((layby) => {
      if (
        layby.position.lat === position.lat &&
        layby.position.lng === position.lng
      ) {
        return layby;
      }
      return false;
    });

    return foundLocation;
  }
}
