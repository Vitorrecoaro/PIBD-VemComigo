import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Telefone } from '../../entity/telefone.entity';

@Injectable()
export class TelefoneService {
  constructor(
    @InjectRepository(Telefone)
    private telefoneRepository: Repository<Telefone>,
  ) {}

  findAll(): Promise<Telefone[]> {
    return this.telefoneRepository.find();
  }

  findOne(id: string): Promise<Telefone> {
    return this.telefoneRepository.findOneBy({ id });
  }

  create(telefone: Telefone): Promise<Telefone> {
    return this.telefoneRepository.save(telefone);
  }

  async update(id: string, telefone: Partial<Telefone>): Promise<Telefone> {
    await this.telefoneRepository.update(id, telefone);
    return this.telefoneRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.telefoneRepository.delete(id);
  }
}
