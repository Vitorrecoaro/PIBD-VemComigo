import { Component } from '@angular/core';
import { AddVehicleModalService } from 'src/app/services/add-vehicle-modal/add-vehicle-modal.service';

@Component({
  selector: 'app-add-vehicle-modal',
  templateUrl: './add-vehicle-modal.component.html',
  styleUrls: ['./add-vehicle-modal.component.scss'],
})
export class AddVehicleModalComponent {
  constructor(public addVehicleModalService: AddVehicleModalService) {}
}
