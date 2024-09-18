import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PontoIntermediario } from '../../entity/pontoIntermediario.entity';

@Injectable()
export class PontoIntermediarioService {
  constructor(
    @InjectRepository(PontoIntermediario)
    private pontoIntermediarioRepository: Repository<PontoIntermediario>,
  ) {}

  findAll(): Promise<PontoIntermediario[]> {
    return this.pontoIntermediarioRepository.find();
  }

  findOne(id: string): Promise<PontoIntermediario> {
    return this.pontoIntermediarioRepository.findOneBy({ id });
  }

  create(pontoIntermediario: PontoIntermediario): Promise<PontoIntermediario> {
    return this.pontoIntermediarioRepository.save(pontoIntermediario);
  }

  async update(id: string, pontoIntermediario: Partial<PontoIntermediario>): Promise<PontoIntermediario> {
    await this.pontoIntermediarioRepository.update(id, pontoIntermediario);
    return this.pontoIntermediarioRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.pontoIntermediarioRepository.delete(id);
  }
}
