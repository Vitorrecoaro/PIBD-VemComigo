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

	@OneToMany(() => Veiculo, veiculo => veiculo.caronista)
	veiculos!: Veiculo[];
}