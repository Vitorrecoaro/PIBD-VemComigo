import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Timestamp } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Comunica {
    @PrimaryGeneratedColumn('identity', { name: 'id' })
    id!: string; // ???

    @Column('varchar', { length: 50, nullable: false, name: 'remetente'})
    IDRemetente: string;

    @Column('varchar', { length: 50, nullable: false, name: 'destinatario'})
    IDDestinatario: string;

    @Column('time', { nullable: false, name: 'timestamp_envio'})
    TimeStampEnvio: Timestamp;

    @Column('time', { nullable: false, name: 'timestamp_ultima_edicao'})
    TimeStampUltimaEdicao: Timestamp;

    @Column('varchar', { length: 255, nullable: false, name: 'texto_mensagem'})
    TextoMensagem: string;

    @Column({ nullable: false })
    IDComunica: string;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IDRemetente' })
    remetente: Usuario;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'IDDestinatario' })
    destinatario: Usuario;
}