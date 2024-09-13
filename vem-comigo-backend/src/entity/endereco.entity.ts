import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Endereco')
export class Endereco {
  @PrimaryGeneratedColumn('identity', { name: 'id' })
  id!: string; // ???

  @Column('varchar', { nullable: false, length: 255, name: 'logradouro' })
  logradouro!: string; 

  @Column('varchar', { nullable: false, length: 10, name: 'numero' })
  numero!: string; 

  @Column('varchar', { nullable: false, length: 100, name: 'bairro' })
  bairro!: string; 

  @Column('varchar', { nullable: false, length: 20, name: 'cep' })
  cep!: string; 

  @Column('varchar', { length: 255, name: 'complemento' })
  complemento!: string; 

  @ManyToOne(() => Usuario, usuario => usuario.telefones)
  usuario!: Usuario;
}