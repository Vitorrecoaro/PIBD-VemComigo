import { Component, Input } from '@angular/core';
import { Car } from 'src/app/types/ride.types';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() car: Car = {
    name: 'Kwid Branco',
    carSign: 'ATB-3428',
  };

  constructor() {}
}
