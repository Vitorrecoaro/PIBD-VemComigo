import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { Carona } from './carona.entity';

@Entity()
export class PontoIntermediario {
    @PrimaryGeneratedColumn('identity', { name: 'id' })
    id!: string;

    @Column()
    IDCarona: string;

    // @Column('numeric', { precision: 9, scale: 6 })
    // Latitude: number;

    // @Column('numeric', { precision: 9, scale: 6 })
    // Longitude: number;

    @Column('time', { nullable: false, name: 'hora_encontro_estimado' })
    hora_encontro_estimado: Timestamp;

    @Column('varchar', { nullable: false, length: 50, name: 'cep' })
    cep: string;

    @Column('varchar', { nullable: false, length: 50, name: 'pais' })
    pais: string;

    @Column('varchar', { nullable: false, length: 50, name: 'complemento' })
    complemento: string;

    @Column('varchar', { nullable: false, length: 50, name: 'cidade' })
    cidade: string;

    @Column('varchar', { nullable: false, length: 50, name: 'bairro' })
    bairro: string;

    @Column('int', { nullable: false, name: 'numero' })
    numero: number;

    @Column({ select: false })
    IDPonto: string;

    @ManyToOne(() => Carona, carona => carona.pontosIntermediarios, { onDelete: 'CASCADE' })
    carona: Carona;
}