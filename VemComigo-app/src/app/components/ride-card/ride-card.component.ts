import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ride } from 'src/app/types/ride.types';

@Component({
  selector: 'app-ride-card',
  templateUrl: './ride-card.component.html',
  styleUrls: ['./ride-card.component.scss'],
})
export class RideCardComponent {
  @Input() ride: Ride = {
    date: new Date(),
    value: 40.0,
    initialPoint: 'São Carlos, SP',
    initialPointTime: '6h10',
    finalPoint: 'Campinas, SP',
    finalPointTime: '8h40',
    driver: {
      name: 'Bellatrix Lestrange',
      rating: 4.9,
    },
    passengers: [],
    car: {
      name: 'Kwid Branco',
      carSign: 'ATB-3428',
    },
  };

  constructor(private router: Router) {}

  public async onButtonClick() {
    try {
      await this.router.navigate(['ride-search', 'ride-accepted'], { replaceUrl: true });
    } catch (error) {
      console.error(error);
    }
  }
}
