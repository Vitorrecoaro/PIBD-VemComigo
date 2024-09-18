import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caroneiro } from '../../entity/caroneiro.entity';
import { CaroneiroService } from '../services/caroneiro.service';
import { CaroneiroController } from '../controllers/caroneiro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Caroneiro])],
  providers: [CaroneiroService],
  controllers: [CaroneiroController],
})
export class CaroneiroModule {}
