import { Component, Input } from '@angular/core';
import { Car } from 'src/app/types/ride.types';

@Component({
  selector: 'app-car-resumed-details',
  templateUrl: './car-resumed-details.component.html',
  styleUrls: ['./car-resumed-details.component.scss'],
})
export class CarResumedDetailsComponent {
  @Input() car: Car = {
    name: 'Kwid Branco',
    carSign: 'ATB-3428',
  };

  constructor() {}
}
