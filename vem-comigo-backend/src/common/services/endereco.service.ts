import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from '../../entity/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  findOne(id: string): Promise<Endereco> {
    return this.enderecoRepository.findOneBy({ id });
  }

  create(endereco: Endereco): Promise<Endereco> {
    return this.enderecoRepository.save(endereco);
  }

  async update(id: string, endereco: Partial<Endereco>): Promise<Endereco> {
    await this.enderecoRepository.update(id, endereco);
    return this.enderecoRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.enderecoRepository.delete(id);
  }
}
