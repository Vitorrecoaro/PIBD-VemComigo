import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VeiculoService } from '../services/veiculo.service';
import { Veiculo } from '../../entity/veiculo.entity';

@Controller('veiculos')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculoService) {}

  @Get()
  findAll(): Promise<Veiculo[]> {
    return this.veiculoService.findAll();
  }

  @Get(':renavam')
  findOne(@Param('renavam') renavam: string): Promise<Veiculo> {
    return this.veiculoService.findOne("identity");
  }

  @Post()
  create(@Body() veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculoService.create(veiculo);
  }

  @Put(':renavam')
  update(@Param('renavam') renavam: string, @Body() veiculo: Partial<Veiculo>): Promise<Veiculo> {
    return this.veiculoService.update("identity", veiculo);
  }

  @Delete(':renavam')
  remove(@Param('renavam') renavam: string): Promise<void> {
    return this.veiculoService.remove(+renavam);
  }
}
