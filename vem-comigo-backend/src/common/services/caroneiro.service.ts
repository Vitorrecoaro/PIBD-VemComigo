import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caroneiro } from '../../entity/caroneiro.entity';

@Injectable()
export class CaroneiroService {
  constructor(
    @InjectRepository(Caroneiro)
    private caroneiroRepository: Repository<Caroneiro>,
  ) {}

  findAll(): Promise<Caroneiro[]> {
    return this.caroneiroRepository.find();
  }

  findOne(id: string): Promise<Caroneiro> {
    return this.caroneiroRepository.findOneBy({ id });
  }

  create(caroneiro: Caroneiro): Promise<Caroneiro> {
    return this.caroneiroRepository.save(caroneiro);
  }

  async update(id: string, caroneiro: Partial<Caroneiro>): Promise<Caroneiro> {
    await this.caroneiroRepository.update(id, caroneiro);
    return this.caroneiroRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.caroneiroRepository.delete(id);
  }
}
