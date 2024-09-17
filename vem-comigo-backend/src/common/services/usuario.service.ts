import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.userRepository.find();
  }

  findOne(id: 'identity'): Promise<Usuario> {
    return this.userRepository.findOneBy({ id });
  }

  create(user: Usuario): Promise<Usuario> {
    return this.userRepository.save(user);
  }

  async update(id: 'identity', user: Partial<Usuario>): Promise<Usuario> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
