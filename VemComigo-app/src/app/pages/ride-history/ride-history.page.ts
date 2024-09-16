import { Component } from '@angular/core';
import { Ride } from 'src/app/types/ride.types';

@Component({
  selector: 'app-ride-history',
  templateUrl: './ride-history.page.html',
  styleUrls: ['./ride-history.page.scss'],
})
export class RideHistoryPage {
  private _rides: Ride[] = [];

  constructor() {}

  public get rides() {
    return this._rides;
  }
}
