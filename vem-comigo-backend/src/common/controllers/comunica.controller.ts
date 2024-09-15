import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ComunicaService } from '../services/comunica.service';
import { Comunica } from '../../entity/comunica.entity';

@Controller('comunicas')
export class ComunicaController {
  constructor(private readonly comunicaService: ComunicaService) {}

  @Get()
  findAll(): Promise<Comunica[]> {
    return this.comunicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comunica> {
    return this.comunicaService.findOne("identity");
  }

  @Post()
  create(@Body() comunica: Comunica): Promise<Comunica> {
    return this.comunicaService.create(comunica);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() comunica: Partial<Comunica>): Promise<Comunica> {
    return this.comunicaService.update("identity", comunica);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.comunicaService.remove(+id);
  }
}
