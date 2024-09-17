import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-search-card',
  templateUrl: './ride-search-card.component.html',
  styleUrls: ['./ride-search-card.component.scss'],
})
export class RideSearchCardComponent {
  from: string = '';
  to: string = '';
  qtdPeople: string = '';
  when: string = '';

  constructor() { };

  Search() {
    console.log('De:', this.from);
    console.log('Para:', this.to);
    console.log('Quantidade de pessoas:', this.qtdPeople);
    console.log('Quando:', this.when);
    // Logica de autenticação...
  }
}
