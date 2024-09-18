import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estrangeiro } from '../../entity/estrangeiro.entity';
import { EstrangeiroService } from '../services/estrangeiro.service';
import { EstrangeiroController } from '../controllers/estrangeiro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Estrangeiro])],
  providers: [EstrangeiroService],
  controllers: [EstrangeiroController],
})
export class EstrangeiroModule {}
