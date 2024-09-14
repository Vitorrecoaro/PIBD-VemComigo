import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endereco } from '../../entity/endereco.entity';
import { EnderecoService } from '../services/endereco.service';
import { EnderecoController } from '../controllers/endereco.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Endereco])],
  providers: [EnderecoService],
  controllers: [EnderecoController],
})
export class EnderecoModule {}
