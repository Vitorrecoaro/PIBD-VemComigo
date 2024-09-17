import { Entity, PrimaryColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Brasileiro')
export class Brasileiro extends Usuario {
  @PrimaryColumn({ type: 'varchar', length: 11 })	
	cpf!: string;
}