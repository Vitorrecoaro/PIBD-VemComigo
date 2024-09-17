import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './common/modules/usuario.module';
import { Usuario, Brasileiro, Estrangeiro, Caronista, Caroneiro, Telefone, Endereco, Veiculo, Carona, PontoIntermediario, Comunica, Avalia, Solicitacao   } from './entity/index'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'vemcomigodb',
      autoLoadEntities: true,
      synchronize: true, // Defina como 'true' para sincronizar automaticamente o schema.
      entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([Usuario, Brasileiro, Estrangeiro, Caronista, Caroneiro, Telefone, Endereco, Veiculo, Carona, PontoIntermediario, Comunica, Avalia, Solicitacao]),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
