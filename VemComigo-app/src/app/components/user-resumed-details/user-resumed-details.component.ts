import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/ride.types';

@Component({
  selector: 'app-user-resumed-details',
  templateUrl: './user-resumed-details.component.html',
  styleUrls: ['./user-resumed-details.component.scss'],
})
export class UserResumedDetailsComponent {
  @Input() user: User = {
    name: 'Bellatrix Lestrange',
    rating: 4.95,
  };

  constructor() {}
}
