import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css'],
})
export class ExplorerComponent implements OnInit {
  shouldAddMarker = false;

  constructor() {}

  onSetAddMarker(state: boolean) {
    this.shouldAddMarker = state;
  }

  ngOnInit(): void {}
}
