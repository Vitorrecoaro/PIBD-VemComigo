import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BrasileiroService } from '../services/brasileiro.service';
import { Brasileiro } from '../../entity/brasileiro.entity';

@Controller('brasileiros')
export class BrasileiroController {
  constructor(private readonly brasileiroService: BrasileiroService) {}

  @Get()
  findAll(): Promise<Brasileiro[]> {
    return this.brasileiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brasileiro> {
    return this.brasileiroService.findOne(id);
  }

  @Post()
  create(@Body() brasileiro: Brasileiro): Promise<Brasileiro> {
    return this.brasileiroService.create(brasileiro);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() brasileiro: Partial<Brasileiro>): Promise<Brasileiro> {
    return this.brasileiroService.update(id, brasileiro);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.brasileiroService.remove(id);
  }
}
