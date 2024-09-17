import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor() { }

  Login() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    // Logica de autenticação...
  }
}
