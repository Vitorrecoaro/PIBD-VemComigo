import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brasileiro } from '../../entity/brasileiro.entity';
import { BrasileiroService } from '../services/brasileiro.service';
import { BrasileiroController } from '../controllers/brasileiro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Brasileiro])],
  providers: [BrasileiroService],
  controllers: [BrasileiroController],
})
export class BrasileiroModule {}
