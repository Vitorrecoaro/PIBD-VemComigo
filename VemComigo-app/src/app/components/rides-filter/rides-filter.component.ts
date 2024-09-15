import { Component, Input } from '@angular/core';
import { RideFilters } from 'src/app/types/ride.types';

@Component({
  selector: 'app-rides-filter',
  templateUrl: './rides-filter.component.html',
  styleUrls: ['./rides-filter.component.scss'],
})
export class RidesFilterComponent {
  @Input() filters: RideFilters = {
    date: new Date(),
    initialPoint: 'São Carlos, SP',
    finalPoint: 'Campinas, SP',
  };

  constructor() {}
}
