import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Telefone } from './telefone.entity';
import { Endereco } from './endereco.entity';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn('identity', { name: 'id' })
  // @PrimaryGeneratedColumn('uuid', { name: 'id' })
  // @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: string;

  @Column('date', { nullable: false, name: 'data_nascimento' })
  data_nascimento!: Date;

  @Column('varchar', { nullable: false, length: 50, name: 'nome' })
  nome!: string;

  @Column('varchar', { nullable: false, length: 255, name: 'foto' })
  foto!: string;

  @Column('varchar', { nullable: false, length: 30, name: 'genero' })
  genero!: string;

  @Column('varchar', { nullable: false, unique: true, length: 255, name: 'email' })
  email!: string;

  @Column('varchar', { nullable: false, length: 255, name: 'senha' })
  senha!: string;

  @Column('boolean', { nullable: false, name: 'nacionalidade' })
  nacionalidade!: boolean;

  @OneToMany(() => Telefone, telefone => telefone.usuario)
  telefones!: Telefone[];

  @OneToMany(() => Endereco, endereco => endereco.usuario)
  enderecos!: Endereco[];
}