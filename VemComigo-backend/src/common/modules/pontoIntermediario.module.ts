import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PontoIntermediario } from '../../entity/pontoIntermediario.entity';
import { PontoIntermediarioService } from '../services/pontoIntermediario.service';
import { PontoIntermediarioController } from '../controllers/pontoIntermediario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PontoIntermediario])],
  providers: [PontoIntermediarioService],
  controllers: [PontoIntermediarioController],
})
export class PontoIntermediarioModule {}
