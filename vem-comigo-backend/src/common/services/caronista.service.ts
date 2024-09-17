import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caronista } from '../../entity/caronista.entity';

@Injectable()
export class CaronistaService {
  constructor(
    @InjectRepository(Caronista)
    private caronistaRepository: Repository<Caronista>,
  ) {}

  findAll(): Promise<Caronista[]> {
    return this.caronistaRepository.find();
  }

  findOne(id: string): Promise<Caronista> {
    return this.caronistaRepository.findOneBy({ id });
  }

  create(caronista: Caronista): Promise<Caronista> {
    return this.caronistaRepository.save(caronista);
  }

  async update(id: string, caronista: Partial<Caronista>): Promise<Caronista> {
    await this.caronistaRepository.update(id, caronista);
    return this.caronistaRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.caronistaRepository.delete(id);
  }
}
