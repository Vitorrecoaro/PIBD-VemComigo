import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avalia } from '../../entity/avalia.entity';

@Injectable()
export class AvaliaService {
  constructor(
    @InjectRepository(Avalia)
    private avaliaRepository: Repository<Avalia>,
  ) {}

  findAll(): Promise<Avalia[]> {
    return this.avaliaRepository.find();
  }

  findOne(id: 'identity'): Promise<Avalia> {
    return this.avaliaRepository.findOneBy({ id });
  }

  create(avalia: Avalia): Promise<Avalia> {
    return this.avaliaRepository.save(avalia);
  }

  async update(id: 'identity', avalia: Partial<Avalia>): Promise<Avalia> {
    await this.avaliaRepository.update(id, avalia);
    return this.avaliaRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.avaliaRepository.delete(id);
  }
}
