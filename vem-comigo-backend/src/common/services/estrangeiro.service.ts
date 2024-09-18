import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estrangeiro  } from '../../entity/estrangeiro.entity';

@Injectable()
export class EstrangeiroService {
  constructor(
    @InjectRepository(Estrangeiro)
    private estrangeiroRepository: Repository<Estrangeiro>,
  ) {}

  async findAll(): Promise<Estrangeiro[]> {
    return await this.estrangeiroRepository.find();
  }

  findOne(id: string): Promise<Estrangeiro> {
    return this.estrangeiroRepository.findOneBy({ id });
  }

  create(user: Estrangeiro): Promise<Estrangeiro> {
    return this.estrangeiroRepository.save(user);
  }

  async update(id: string, user: Partial<Estrangeiro>): Promise<Estrangeiro> {
    await this.estrangeiroRepository.update(id, user);
    return this.estrangeiroRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.estrangeiroRepository.delete(id);
  }
}