import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TelefoneService } from '../services/telefone.service';
import { Telefone } from '../../entity/telefone.entity';

@Controller('telefones')
export class TelefoneController {
  constructor(private readonly telefoneService: TelefoneService) {}

  @Get()
  findAll(): Promise<Telefone[]> {
    return this.telefoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Telefone> {
    return this.telefoneService.findOne("identity");
  }

  @Post()
  create(@Body() telefone: Telefone): Promise<Telefone> {
    return this.telefoneService.create(telefone);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() telefone: Partial<Telefone>): Promise<Telefone> {
    return this.telefoneService.update("identity", telefone);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.telefoneService.remove(+id);
  }
}
