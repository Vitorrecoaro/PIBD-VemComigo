import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../../entity/endereco.entity';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Get()
  findAll(): Promise<Endereco[]> {
    return this.enderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Endereco> {
    return this.enderecoService.findOne(id);
  }

  @Post()
  create(@Body() endereco: Endereco): Promise<Endereco> {
    return this.enderecoService.create(endereco);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() endereco: Partial<Endereco>): Promise<Endereco> {
    return this.enderecoService.update(id, endereco);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.enderecoService.remove(id);
  }
}
