import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comunica } from '../../entity/comunica.entity';

@Injectable()
export class ComunicaService {
  constructor(
    @InjectRepository(Comunica)
    private comunicaRepository: Repository<Comunica>,
  ) {}

  findAll(): Promise<Comunica[]> {
    return this.comunicaRepository.find();
  }

  findOne(id: string): Promise<Comunica> {
    return this.comunicaRepository.findOneBy({ id });
  }

  create(comunica: Comunica): Promise<Comunica> {
    return this.comunicaRepository.save(comunica);
  }

  async update(id: string, comunica: Partial<Comunica>): Promise<Comunica> {
    await this.comunicaRepository.update(id, comunica);
    return this.comunicaRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.comunicaRepository.delete(id);
  }
}
