import { Component, Input } from '@angular/core';
import { Car, User } from 'src/app/types/ride.types';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss'],
})
export class DriverCardComponent {
  @Input() driver: User = {
    name: 'Bellatrix Lestrange',
    rating: 4.9,
  };
  @Input() car: Car = {
    name: 'Kwid Branco',
    carSign: 'ATB-3428',
  };

  constructor() {}
}
