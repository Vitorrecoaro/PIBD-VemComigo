import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  public async Login() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    // Logica de autenticação...

    await this.router.navigate(['ride-search']);
  }
}
