import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddVehicleModalService {
  private modalIsOpen: boolean = false;

  constructor() {}

  public get isOpen() {
    return this.modalIsOpen;
  }

  public openModal() {
    this.modalIsOpen = true;
  }

  public closeModal() {
    this.modalIsOpen = false;
  }
}
