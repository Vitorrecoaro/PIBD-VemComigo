import { Component, Input } from '@angular/core';
import { Ride } from 'src/app/types/ride.types';

@Component({
  selector: 'app-ride-detailed-card',
  templateUrl: './ride-detailed-card.component.html',
  styleUrls: ['./ride-detailed-card.component.scss'],
})
export class RideDetailedCardComponent {
  @Input() ride: Ride = {
    date: new Date(),
    value: 40.0,
    initialPoint: 'São Carlos, SP',
    initialPointTime: '6h30',
    finalPoint: 'Campinas, SP',
    finalPointTime: '8h40',
    driver: {
      name: 'Bellatrix Lestrange',
      rating: 4.9,
    },
  };

  constructor() {}
}
