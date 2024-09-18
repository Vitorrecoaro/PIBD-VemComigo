import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefone } from '../../entity/telefone.entity';
import { TelefoneService } from '../services/telefone.service';
import { TelefoneController } from '../controllers/telefone.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Telefone])],
  providers: [TelefoneService],
  controllers: [TelefoneController],
})
export class TelefoneModule {}
