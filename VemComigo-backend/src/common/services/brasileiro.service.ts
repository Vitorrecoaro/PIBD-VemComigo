import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brasileiro } from '../../entity/brasileiro.entity';

@Injectable()
export class BrasileiroService {
  constructor(
    @InjectRepository(Brasileiro)
    private brasileiroRepository: Repository<Brasileiro>,
  ) {}

  findAll(): Promise<Brasileiro[]> {
    return this.brasileiroRepository.find();
  }

  findOne(id: string): Promise<Brasileiro> {
    return this.brasileiroRepository.findOneBy({ id });
  }

  create(brasileiro: Brasileiro): Promise<Brasileiro> {
    return this.brasileiroRepository.save(brasileiro);
  }

  async update(id: string, brasileiro: Partial<Brasileiro>): Promise<Brasileiro> {
    await this.brasileiroRepository.update(id, brasileiro);
    return this.brasileiroRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.brasileiroRepository.delete(id);
  }
}
