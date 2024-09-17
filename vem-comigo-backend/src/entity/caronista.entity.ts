import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Veiculo } from './veiculo.entity';

@Entity('Caronista')
export class Caronista extends Usuario {
  @PrimaryGeneratedColumn('identity', { name: 'cnh' })	
	cnh!: string;

	@Column('int', { nullable: false, name: 'qtd_viagens' })
	qtd_viagens!: number;	
	
	@Column('float', { nullable: false, name: 'nota_media' })
	nota_media!: number;

	@Column('varchar', { nullable: false, name: 'validade_cnh' })
	validade_cnh!: string;
}