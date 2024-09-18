import { Component } from '@angular/core';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.page.html',
  styleUrls: ['./create-ride.page.scss'],
})
export class CreateRidePage {
  origin: string = '';
  destiny: string = '';
  qtdSeats: string = '';
  bagage: string = '';
  when: string = '';
  preference: string = '';
  startTime: string = '';
  veicle: string = '';
  price: string = '';

  constructor() { };

  CreateRide() {
    console.log('Origem:', this.origin);
    console.log('Destino:', this.destiny);
    console.log('Quantidade de assentos:', this.qtdSeats);
    console.log('Bagagem:', this.bagage);
    console.log('Quando:', this.when);
    console.log('Preferência:', this.preference);
    console.log('Horário de início:', this.startTime);
    console.log('Veículo:', this.veicle);
    console.log('Preço:', this.price);
    // Logica de criação de carona...
  }
}
