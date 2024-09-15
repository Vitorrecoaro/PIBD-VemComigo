import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitacao } from '../../entity/solicitacao.entity';

@Injectable()
export class SolicitacaoService {
  constructor(
    @InjectRepository(Solicitacao)
    private solicitacaoRepository: Repository<Solicitacao>,
  ) {}

  findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find();
  }

  findOne(id: 'identity'): Promise<Solicitacao> {
    return this.solicitacaoRepository.findOneBy({ id });
  }

  create(solicitacao: Solicitacao): Promise<Solicitacao> {
    return this.solicitacaoRepository.save(solicitacao);
  }

  async update(id: 'identity', solicitacao: Partial<Solicitacao>): Promise<Solicitacao> {
    await this.solicitacaoRepository.update(id, solicitacao);
    return this.solicitacaoRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.solicitacaoRepository.delete(id);
  }
}
