import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Caronista } from './caronista.entity';
import { Carona } from './carona.entity';

@Entity('Veiculo')
export class Veiculo {
  @PrimaryGeneratedColumn('identity', { name: 'renavam' })
  renavam!: string;

  @Column('varchar', { nullable: false, length: 50, name: 'modelo' })
  modelo!: string;

  @Column('varchar', { nullable: false, length: 50, name: 'tipo' })
  tipo!: string;

  @Column('varchar', { nullable: false, length: 50, name: 'cor' })
  cor!: string;

  @Column('varchar', { nullable: false, length: 50, name: 'tamanho_porta_malas' })
  tamanho_porta_malas!: string;

  @Column('varchar', { nullable: false, length: 50, name: 'placa' })
  placa!: string;

  @Column('int', { nullable: false, name: 'ano' })
	ano!: number;   

	// @ManyToOne(() => Caronista, caronista => caronista.veiculos)
	// caronista!: Caronista;

	// @Column('varchar', { nullable: false, length: 50, name: 'relacao_com_caronista' })
	// relacao_com_caronista!: string;

  @OneToOne(() => Carona, carona => carona.veiculo)
  carona!: Carona;
}