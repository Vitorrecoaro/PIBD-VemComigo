import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Caroneiro')
export class Caroneiro extends Usuario {
	@Column('int', { nullable: false, name: 'qtd_viagens' })
	qtd_viagens!: number;	
	
	@Column('float', { nullable: false, name: 'nota_media' })
	nota_media!: number;
}