import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Carona } from './carona.entity';

@Entity()
export class Avalia {
    @PrimaryGeneratedColumn('identity', { name: 'id' })
    id!: string; // ???

    @Column('varchar', { length: 50, nullable: false, name: 'caroneiro' })
    IDCaroneiro: string;

    @Column('varchar', { length: 50, nullable: false, name: 'caronista' })
    IDCaronista: string;

    @Column('varchar', { length: 255, nullable: false, name: 'carona' })
    IDCarona: string;

    @Column('date', { nullable: false, name: 'data' })
    DataAvalia: Date;

    @Column('timestamp', { nullable: false, name: 'hora' })
    Hora: Timestamp;

    @Column('varchar', { length: 255, nullable: false, name: 'descricao' })
    Descricao: string;

    @Column('float', { nullable: false, name: 'nota' })
    Nota: number;

    @Column('varchar', { nullable: false, name: 'IDAvalia' })
    IDAvalia: string;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    IDCaroneiroUsuario: Usuario;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    IDCaronistaUsuario: Usuario;

    @ManyToOne(() => Carona, { onDelete: 'CASCADE' })
    IDCaronaCarona: Carona;
}