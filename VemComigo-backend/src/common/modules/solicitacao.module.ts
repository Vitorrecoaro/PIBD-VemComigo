import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitacao } from '../../entity/solicitacao.entity';
import { SolicitacaoService } from '../services/solicitacao.service';
import { SolicitacaoController } from '../controllers/solicitacao.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitacao])],
  providers: [SolicitacaoService],
  controllers: [SolicitacaoController],
})
export class SolicitacaoModule {}
