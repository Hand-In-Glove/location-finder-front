import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-add-location',
  templateUrl: './confirm-add-location.component.html',
  styleUrls: ['./confirm-add-location.component.css'],
})
export class ConfirmAddLocationComponent implements OnInit {
  @Input() position: google.maps.LatLng;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleRedirect() {
    console.log('CLICKED TO REDIRECT');
    this.router.navigate(['/new-location'], {
      queryParams: { position: this.position },
    });
  }
}
