import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import Layby from './layby.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;

  display: google.maps.LatLngLiteral | undefined;

  mapOptions: google.maps.MapOptions = {
    center: { lat: this.lat, lng: this.lng },
    zoom: 14,
  };

  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.BOUNCE,
    draggable: false,
  };

  laybys: Layby[] = [];

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  mockLaybyId = 0;

  laybyToDisplay: number | null = null;

  constructor() {
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
          console.log('NEW GEOLOCATION : ', this.lat, this.lng);
        },
        (error) => console.log('ERROR: ', error)
      );
      console.log('NAVIGATOR HAS GEOLOCATION : ', this.lat, this.lng);
    } else {
      console.log('NO GEOLOCATION');
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.mapOptions.center = event.latLng?.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng?.toJSON();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.laybys.push({
        position: event.latLng.toJSON(),
        rating: 10,
        submittedBy: 'Test User',
        _id: this.mockLaybyId++,
      });
    }
  }

  openInfoWindow(marker: MapMarker) {
    console.log('MARKER POSITION: ', marker.getPosition()?.toJSON());
    this.infoWindow.open(marker);
    const foundLayby = this.getLaybyFromPosition(
      marker.getPosition()?.toJSON()
    );
    console.log('FOUND THIS ONE: ', foundLayby);
  }

  setLaybyToDisplay(id: Layby['_id']) {
    this.laybyToDisplay = id;
  }

  clearLaybyToDisplay() {
    this.laybyToDisplay = null;
  }

  getLaybyFromPosition(position: google.maps.LatLngLiteral | undefined) {
    if (!position) return undefined;
    const foundLayby = this.laybys.find((layby) => {
      if (
        layby.position.lat === position.lat &&
        layby.position.lng === position.lng
      ) {
        return layby;
      }
      return false;
    });

    return foundLayby;
  }
}
