import { Injectable } from '@nestjs/common';
import { UsuarioController } from './common/controllers/usuario.controller';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getUsuarios(): string {
  //   return 'Lista de usuários';
  // }

}
