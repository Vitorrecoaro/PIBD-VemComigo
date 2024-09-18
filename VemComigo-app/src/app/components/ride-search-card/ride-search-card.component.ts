import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  async Search() {
    console.log('De:', this.from);
    console.log('Para:', this.to);
    console.log('Quantidade de pessoas:', this.qtdPeople);
    console.log('Quando:', this.when);
    // Logica de autenticação...

    try {
      await this.router.navigate(['ride-search-results'], { relativeTo: this.activeRoute });
    } catch (error) {
      console.error(error);
    }
  }
}
