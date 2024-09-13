import { Component, Input } from '@angular/core';
import { Ride } from 'src/app/types/ride.types';

@Component({
  selector: 'app-ride-resumed',
  templateUrl: './ride-resumed.component.html',
  styleUrls: ['./ride-resumed.component.scss'],
})
export class RideResumedComponent {
  @Input() ride: Ride = {
    date: new Date(),
    value: 40.0,
    initialPoint: 'São Carlos, SP',
    initialPointTime: '6h10',
    finalPoint: 'Campinas, SP',
    finalPointTime: '8h40',
    driver: {
      name: 'José Geraldo',
      rating: 4.98,
    },
  };

  constructor() {}
}
