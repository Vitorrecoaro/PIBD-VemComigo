import { Component } from '@angular/core';
import { AddVehicleModalService } from 'src/app/services/add-vehicle-modal/add-vehicle-modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  constructor(private addVehicleModalService: AddVehicleModalService) {}

  public handleAddNewVehicleButton() {
    this.addVehicleModalService.openModal();
  }
}
