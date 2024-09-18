import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caronista } from '../../entity/caronista.entity';
import { CaronistaService } from '../services/caronista.service';
import { CaronistaController } from '../controllers/caronista.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Caronista])],
  providers: [CaronistaService],
  controllers: [CaronistaController],
})
export class CaronistaModule {}
