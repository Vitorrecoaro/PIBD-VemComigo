import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ComunicaService } from '../services/comunica.service';
import { Comunica } from '../../entity/comunica.entity';

@Controller('comunica')
export class ComunicaController {
  constructor(private readonly comunicaService: ComunicaService) {}

  @Get()
  findAll(): Promise<Comunica[]> {
    return this.comunicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comunica> {
    return this.comunicaService.findOne(id);
  }

  @Post()
  create(@Body() comunica: Comunica): Promise<Comunica> {
    return this.comunicaService.create(comunica);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() comunica: Partial<Comunica>): Promise<Comunica> {
    return this.comunicaService.update(id, comunica);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.comunicaService.remove(id);
  }
}
