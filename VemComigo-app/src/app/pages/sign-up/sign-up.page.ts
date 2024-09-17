import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  nationality: string = '';
  document: string = '';
  address: string = '';
  complement: string = '';
  cep: string = '';
  number: string = '';

  constructor() { };

  public async SignUp() {
    console.log('Nome:', this.name);
    console.log('Sobrenome:', this.surname);
    console.log('Email:', this.email);
    console.log('Senha:', this.password);
    console.log('Confirmação de senha:', this.passwordConfirmation);
    console.log('Nacionalidade:', this.nationality);
    console.log('Documento:', this.document);
    console.log('Endereço:', this.address);
    console.log('Complemento:', this.complement);
    console.log('CEP:', this.cep);
    console.log('Número:', this.number);
    // Logica de cadastro...
  }
}
