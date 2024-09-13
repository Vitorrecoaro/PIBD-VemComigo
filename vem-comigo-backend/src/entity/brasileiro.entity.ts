import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Brasileiro')
export class Brasileiro extends Usuario {
  @PrimaryGeneratedColumn('identity', { name: 'cpf' })	
	cpf!: string;
}