import { Component, Input, OnInit } from '@angular/core';
import Layby from '../layby.model';

@Component({
  selector: 'app-layby-info',
  templateUrl: './layby-info.component.html',
  styleUrls: ['./layby-info.component.css'],
})
export class LaybyInfoComponent implements OnInit {
  @Input() layby: Layby;
  constructor() {}

  ngOnInit(): void {}
}
