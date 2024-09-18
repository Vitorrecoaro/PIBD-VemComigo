import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carona } from '../../entity/carona.entity';
import { CaronaService } from '../services/carona.service';
import { CaronaController } from '../controllers/carona.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carona])],
  providers: [CaronaService],
  controllers: [CaronaController],
})
export class CaronaModule {}
