import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/_models/location.model';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css'],
})
export class LocationInfoComponent implements OnInit {
  @Input() location: Location;
  constructor() {}

  ngOnInit(): void {}
}
