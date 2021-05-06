import { Component, Input, OnInit } from '@angular/core';
import { Sight } from 'src/app/sight';

@Component({
  selector: 'app-view-sight',
  templateUrl: './view-sight.component.html',
  styleUrls: ['./view-sight.component.css'],
})
export class ViewSightComponent implements OnInit {
  @Input() sight: Sight;
  constructor() {
    console.log(this.sight);
  }

  ngOnInit(): void {}
}
