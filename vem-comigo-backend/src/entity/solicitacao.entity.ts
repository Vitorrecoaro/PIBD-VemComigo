import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Solicitacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    IDCaronista: string;

    @Column({ length: 50 })
    IDCaroneiro: string;

    @Column({ length: 27 })
    TimeStampSolicitacao: string;

    @Column({ length: 100, nullable: true })
    IDSolicitacao: string;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IDCaronista' })
    caronista: Usuario;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IDCaroneiro' })
    caroneiro: Usuario;
}