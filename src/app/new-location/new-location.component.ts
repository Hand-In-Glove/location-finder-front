import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import FACILITIES from '../_models/facilities.model';
import LocationService, {
  LocationResponseData,
} from '../_services/location.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css'],
})
export class NewLocationComponent implements OnInit {
  position: { lat: number; lng: number };
  paramSub: Subscription;
  facilitiesOptions = Object.values(FACILITIES);
  facilityChoices = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.queryParams.subscribe((params) => {
      const [lat, lng] = params['position'].split(',');
      this.position = { lat, lng };
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.isLoading = true;
    const formData = {
      description: form.value.description,
      position: this.position,
      facilities: this.facilityChoices,
    };

    console.log('FORM DATA: ', formData);
    this.locationService.addNewLocation(formData).subscribe({
      next: (res) => {
        console.log('RES: ', res);
        this.isLoading = false;
        this.router.navigate(['/explorer']);
      },
      error: (res) => {
        console.log('Error: ', res.error);
        this.error = `${res.status}: ${res.error.message}`;
        this.isLoading = false;
      },
    });

    form.reset();
  }

  onCheckChange(eventTarget) {
    const { checked: isChecked, value: facility } = eventTarget;
    if (isChecked) {
      this.facilityChoices.push(facility);
    } else {
      this.facilityChoices = this.facilityChoices.filter(
        (choice) => choice !== facility
      );
    }
  }
}
