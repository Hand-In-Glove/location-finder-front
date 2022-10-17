import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  shouldAddMarker = false;
  @Output() setAddMarker = new EventEmitter<boolean>();

  constructor() {}

  handleToggleAddMarker() {
    this.shouldAddMarker = !this.shouldAddMarker;
    this.setAddMarker.emit(this.shouldAddMarker);
  }

  ngOnInit(): void {}
}
