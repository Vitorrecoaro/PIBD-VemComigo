import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Veiculo } from './veiculo.entity';
import { PontoIntermediario } from './pontoIntermediario.entity';

@Entity('Carona')
export class Carona {
  @PrimaryGeneratedColumn('identity', { name: 'id' })
  // @PrimaryGeneratedColumn('uuid', { name: 'id' })
  // @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: string;

  @Column('date', { nullable: false, name: 'data' })
  data!: Date;

  @Column('time', { nullable: false, name: 'hora_fim' })
	hora_inicio!: Timestamp;

  @Column('time', { nullable: false, name: 'hora_fim' })
	hora_fim!: Timestamp;

	// Latitude e longitude inicias

	// Latitude e longitude finais

  @Column('time', { nullable: false, name: 'duracao_estimada' })
	duracao_estimada!: Timestamp;

	@Column('int', { nullable: false, name: 'qtd_vagas' })
	qtd_vagas!: number;

	@Column('float', { nullable: false, name: 'preco' })
	preco!: number;

	@Column('boolean', { nullable: false, name: 'pet' })
	pet!: boolean;

	@Column('boolean', { nullable: false, name: 'fumante' })
	fumante!: boolean;

	@Column('boolean', { nullable: false, name: 'ar_condicionado' })
	ar_condicionado!: boolean;

	// ID Usuario/Caronista

  @OneToOne(() => Veiculo, veiculo => veiculo.carona)
	veiculo!: Veiculo;

	// CaronistaVeiculo

	@OneToMany(() => PontoIntermediario, pontoIntermediario => pontoIntermediario.carona)
	pontosIntermediarios!: PontoIntermediario[];
}