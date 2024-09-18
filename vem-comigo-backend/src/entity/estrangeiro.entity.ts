import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Estrangeiro')
export class Estrangeiro extends Usuario {
  @PrimaryGeneratedColumn('identity', { name: 'id_estrangeiro' })	
	id_estrangeiro!: string;

	@Column('varchar', { nullable: false, length: 50, name: 'codigo' })
	codigo!: string;

	@Column('date', { nullable: false, name: 'data_validade' })
  data_validade!: Date;
}