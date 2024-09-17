import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SolicitacaoService } from '../services/solicitacao.service';
import { Solicitacao } from '../../entity/solicitacao.entity';

@Controller('solicitacaos')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Get()
  findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Solicitacao> {
    return this.solicitacaoService.findOne(id);
  }

  @Post()
  create(@Body() solicitacao: Solicitacao): Promise<Solicitacao> {
    return this.solicitacaoService.create(solicitacao);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() solicitacao: Partial<Solicitacao>): Promise<Solicitacao> {
    return this.solicitacaoService.update(id, solicitacao);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.solicitacaoService.remove(id);
  }
}
