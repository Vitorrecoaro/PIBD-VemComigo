import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veiculo } from '../../entity/veiculo.entity';
import { VeiculoService } from '../services/veiculo.service';
import { VeiculoController } from '../controllers/veiculo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo])],
  providers: [VeiculoService],
  controllers: [VeiculoController],
})
export class VeiculoModule {}
