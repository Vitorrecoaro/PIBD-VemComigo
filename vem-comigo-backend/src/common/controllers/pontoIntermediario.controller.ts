import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PontoIntermediarioService } from '../services/pontoIntermediario.service';
import { PontoIntermediario } from '../../entity/pontoIntermediario.entity';

@Controller('pontoIntermediarios')
export class PontoIntermediarioController {
  constructor(private readonly pontoIntermediarioService: PontoIntermediarioService) {}

  @Get()
  findAll(): Promise<PontoIntermediario[]> {
    return this.pontoIntermediarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PontoIntermediario> {
    return this.pontoIntermediarioService.findOne(id);
  }

  @Post()
  create(@Body() pontoIntermediario: PontoIntermediario): Promise<PontoIntermediario> {
    return this.pontoIntermediarioService.create(pontoIntermediario);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() pontoIntermediario: Partial<PontoIntermediario>): Promise<PontoIntermediario> {
    return this.pontoIntermediarioService.update(id, pontoIntermediario);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pontoIntermediarioService.remove(id);
  }
}
