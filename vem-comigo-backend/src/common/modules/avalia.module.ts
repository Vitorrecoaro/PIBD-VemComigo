import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avalia } from '../../entity/avalia.entity';
import { AvaliaService } from '../services/avalia.service';
import { AvaliaController } from '../controllers/avalia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Avalia])],
  providers: [AvaliaService],
  controllers: [AvaliaController],
})
export class AvaliaModule {}
