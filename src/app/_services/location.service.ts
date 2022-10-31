import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../_models/location.model';

export interface LocationResponseData extends Location {}

interface LocationData {
  position: {
    lat: number;
    lng: number;
  };
  facilities: string[];
  description?: string;
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
class LocationService {
  constructor(private http: HttpClient) {}

  addNewLocation(data: LocationData) {
    return this.http.post<LocationResponseData>(
      'http://localhost:3000/locations',
      data
    );
  }
}

export default LocationService;
