import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comunica } from '../../entity/comunica.entity';
import { ComunicaService } from '../services/comunica.service';
import { ComunicaController } from '../controllers/comunica.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comunica])],
  providers: [ComunicaService],
  controllers: [ComunicaController],
})
export class ComunicaModule {}
