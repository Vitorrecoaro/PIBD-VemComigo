import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsuarios(): string {
    return 'Lista de usuários';
  }
}
