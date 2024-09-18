import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CaronistaService } from '../services/caronista.service';
import { Caronista } from '../../entity/caronista.entity';

@Controller('caronista')
export class CaronistaController {
  constructor(private readonly caronistaService: CaronistaService) {}

  @Get()
  findAll(): Promise<Caronista[]> {
    return this.caronistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Caronista> {
    return this.caronistaService.findOne(id);
  }

  @Post()
  create(@Body() caronista: Caronista): Promise<Caronista> {
    return this.caronistaService.create(caronista);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() caronista: Partial<Caronista>): Promise<Caronista> {
    return this.caronistaService.update(id, caronista);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.caronistaService.remove(id);
  }
}
