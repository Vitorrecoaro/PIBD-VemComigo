import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CaronaService } from '../services/carona.service';
import { Carona } from '../../entity/carona.entity';

@Controller('caronas')
export class CaronaController {
  constructor(private readonly caronaService: CaronaService) {}

  @Get()
  findAll(): Promise<Carona[]> {
    return this.caronaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Carona> {
    return this.caronaService.findOne("identity");
  }

  @Post()
  create(@Body() carona: Carona): Promise<Carona> {
    return this.caronaService.create(carona);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() carona: Partial<Carona>): Promise<Carona> {
    return this.caronaService.update("identity", carona);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.caronaService.remove(+id);
  }
}
