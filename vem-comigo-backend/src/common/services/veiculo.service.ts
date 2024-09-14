import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from '../../entity/veiculo.entity';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectRepository(Veiculo)
    private veiculoRepository: Repository<Veiculo>,
  ) {}

  findAll(): Promise<Veiculo[]> {
    return this.veiculoRepository.find();
  }

  findOne(renavam: 'identity'): Promise<Veiculo> {
    return this.veiculoRepository.findOneBy({ renavam });
  }

  create(veiculo: Veiculo): Promise<Veiculo> {
    return this.veiculoRepository.save(veiculo);
  }

  async update(renavam: 'identity', veiculo: Partial<Veiculo>): Promise<Veiculo> {
    await this.veiculoRepository.update(renavam, veiculo);
    return this.veiculoRepository.findOneBy({ renavam });
  }

  async remove(renavam: number): Promise<void> {
    await this.veiculoRepository.delete(renavam);
  }
}
