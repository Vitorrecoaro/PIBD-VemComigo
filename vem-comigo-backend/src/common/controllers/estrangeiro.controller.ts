import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstrangeiroService } from '../services/estrangeiro.service';
import { Estrangeiro } from '../../entity/estrangeiro.entity';

@Controller('estrangeiro')
export class EstrangeiroController {
  constructor(private readonly estrangeiroService: EstrangeiroService) {}

  @Get()
  async findAll() {
    try {
      const data = await this.estrangeiroService.findAll();
      console.log('Dados retornados pelo banco:', data);
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Estrangeiro> {
    return this.estrangeiroService.findOne(id);
  }

  @Post()
  create(@Body() user: Estrangeiro): Promise<Estrangeiro> {
    return this.estrangeiroService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partial<Estrangeiro>): Promise<Estrangeiro> {
    return this.estrangeiroService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.estrangeiroService.remove(id);
  }
}