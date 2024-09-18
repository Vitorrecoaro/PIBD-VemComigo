import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Telefone')
export class Telefone {
  @PrimaryGeneratedColumn('identity', { name: 'id' })
  id!: string; // ???

  @Column('varchar', { nullable: false, length: 5, name: 'ddi' })
  ddi!: string; 

  @Column('varchar', { nullable: false, length: 5, name: 'ddd' })
  ddd!: string; 

  @Column('varchar', { nullable: false, length: 5, name: 'prefixo' })
  prefixo!: string; 

  @Column('varchar', { nullable: false, length: 50, name: 'numero' })
  numero!: string; 

	@ManyToOne(() => Usuario, usuario => usuario.telefones)
	usuario!: Usuario;
}