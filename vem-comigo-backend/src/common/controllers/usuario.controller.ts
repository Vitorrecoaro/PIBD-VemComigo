import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../entity/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAll() {
    try {
      const data = await this.usuarioService.findAll();
      console.log('Dados retornados pelo banco:', data);
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log(error);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Usuario> {
  //   return this.usuarioService.findOne(id);
  // }

  @Post()
  create(@Body() user: Usuario): Promise<Usuario> {
    return this.usuarioService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuarioService.remove(id);
  }

  @Get(':id')
  findUserAssesment(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.findUserAssesment(id);
  }
}
