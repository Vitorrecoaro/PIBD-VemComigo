import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    // return await this.usuarioRepository.find();
    //return await this.usuarioRepository.query(`SELECT * FROM "Usuario"`);
    return await this.usuarioRepository.query(`SELECT * FROM "Usuario"`);
  }

  findOne(id: string): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id });
  }

  async findUserAssesment(id: string): Promise<Usuario> {
    return await this.usuarioRepository.query(`SELECT * FROM userassessmentview`);
  }

  create(user: Usuario): Promise<Usuario> {
    return this.usuarioRepository.save(user);
  }

  async update(id: string, user: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, user);
    return this.usuarioRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
