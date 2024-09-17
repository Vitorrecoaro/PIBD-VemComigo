import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario, Brasileiro, Estrangeiro, Caronista, Caroneiro, Telefone, Endereco, Veiculo, Carona, PontoIntermediario, Comunica, Avalia, Solicitacao } from './entity/index';

import { AvaliaModule } from './common/modules/avalia.module';
import { CaronaModule } from './common/modules/carona.module';
import { ComunicaModule } from './common/modules/comunica.module';
import { EnderecoModule } from './common/modules/endereco.module';
import { PontoIntermediarioModule } from './common/modules/pontoIntermediario.module';
import { SolicitacaoModule } from './common/modules/solicitacao.module';
import { TelefoneModule } from './common/modules/telefone.module';
import { UserModule } from './common/modules/usuario.module';
import { VeiculoModule } from './common/modules/veiculo.module';
import { EstrangeiroModule} from './common/modules/estrangeiro.module';

@Module({
  imports: [
    // Configuração da conexão com o banco de dados
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'cachorro',
      database: 'vemcomigodb',
      autoLoadEntities: true, // Carrega automaticamente todas as entidades
      synchronize: false, // Usar apenas em desenvolvimento. Em produção, use migrações.
    }),
    // Registra as entidades usadas neste módulo
    TypeOrmModule.forFeature([
      Usuario, Brasileiro, Estrangeiro, Caronista, Caroneiro, Telefone, 
      Endereco, Veiculo, Carona, PontoIntermediario, Comunica, Avalia, Solicitacao
    ]),
    AvaliaModule, CaronaModule, UserModule, TelefoneModule, ComunicaModule, EnderecoModule, PontoIntermediarioModule, SolicitacaoModule, VeiculoModule, EstrangeiroModule // Importa o módulo de usuários
  ],
  controllers: [AppController], // Controladores principais
  providers: [AppService],      // Provedores principais
})
export class AppModule {}
