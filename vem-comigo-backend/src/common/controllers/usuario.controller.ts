import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../entity/usuario.entity';

@Controller('users')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Get()
  async findAll() {
    try {
      const data = await this.userService.findAll();
      console.log('Dados retornados pelo banco:', data);
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.userService.findOne("identity");
  }

  @Post()
  create(@Body() user: Usuario): Promise<Usuario> {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partial<Usuario>): Promise<Usuario> {
    return this.userService.update("identity", user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}
