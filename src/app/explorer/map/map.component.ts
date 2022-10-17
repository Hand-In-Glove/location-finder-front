import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapAnchorPoint, MapInfoWindow, MapMarker } from '@angular/google-maps';
import Layby from './layby.model';

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

  laybys: Layby[] = [];

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;

  mockLaybyId = 0;

  laybyToDisplay: Layby | null = null;

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
      // this.infoWindow.open();
      // this.laybys.push({
      //   name: 'New Layby',
      //   position: event.latLng.toJSON(),
      //   rating: 10,
      //   submittedBy: 'Test User',
      //   _id: this.mockLaybyId++,
      //   imageUrl:
      //     'https://i2-prod.gloucestershirelive.co.uk/incoming/article688360.ece/ALTERNATES/s1200c/dogging1.jpg',
      // });
    }
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
    const foundLayby = this.getLaybyFromPosition(
      marker.getPosition()?.toJSON()
    );
    if (foundLayby) this.setLaybyToDisplay(foundLayby);
  }

  setLaybyToDisplay(layby: Layby) {
    this.laybyToDisplay = layby;
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
