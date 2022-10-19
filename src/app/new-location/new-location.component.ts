import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import FACILITIES from '../_models/facilities.model';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css'],
})
export class NewLocationComponent implements OnInit {
  position: google.maps.LatLng;
  paramSub: Subscription;
  facilitiesOptions = Object.values(FACILITIES);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramSub = this.route.queryParams.subscribe((params) => {
      this.position = params['position'];
    });
  }

  onSubmit(form: NgForm) {
    console.log;
  }
}
