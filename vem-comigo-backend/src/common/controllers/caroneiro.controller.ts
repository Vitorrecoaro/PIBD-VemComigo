import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CaroneiroService } from '../services/caroneiro.service';
import { Caroneiro } from '../../entity/caroneiro.entity';

@Controller('caroneiro')
export class CaroneiroController {
  constructor(private readonly caroneiroService: CaroneiroService) {}

  @Get()
  findAll(): Promise<Caroneiro[]> {
    return this.caroneiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Caroneiro> {
    return this.caroneiroService.findOne(id);
  }

  @Post()
  create(@Body() caroneiro: Caroneiro): Promise<Caroneiro> {
    return this.caroneiroService.create(caroneiro);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() caroneiro: Partial<Caroneiro>): Promise<Caroneiro> {
    return this.caroneiroService.update(id, caroneiro);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.caroneiroService.remove(id);
  }
}
