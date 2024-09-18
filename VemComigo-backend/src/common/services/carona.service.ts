import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carona } from '../../entity/carona.entity';

@Injectable()
export class CaronaService {
  constructor(
    @InjectRepository(Carona)
    private caronaRepository: Repository<Carona>,
  ) {}

  findAll(): Promise<Carona[]> {
    return this.caronaRepository.find();
  }

  findOne(id: string): Promise<Carona> {
    return this.caronaRepository.findOneBy({ id });
  }

  create(carona: Carona): Promise<Carona> {
    return this.caronaRepository.save(carona);
  }

  async update(id: string, carona: Partial<Carona>): Promise<Carona> {
    await this.caronaRepository.update(id, carona);
    return this.caronaRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.caronaRepository.delete(id);
  }
}
