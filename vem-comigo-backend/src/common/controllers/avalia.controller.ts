import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AvaliaService } from '../services/avalia.service';
import { Avalia } from '../../entity/avalia.entity';

@Controller('avalias')
export class AvaliaController {
  constructor(private readonly avaliaService: AvaliaService) {}

  @Get()
  findAll(): Promise<Avalia[]> {
    return this.avaliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Avalia> {
    return this.avaliaService.findOne("identity");
  }

  @Post()
  create(@Body() avalia: Avalia): Promise<Avalia> {
    return this.avaliaService.create(avalia);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() avalia: Partial<Avalia>): Promise<Avalia> {
    return this.avaliaService.update("identity", avalia);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.avaliaService.remove(+id);
  }
}
