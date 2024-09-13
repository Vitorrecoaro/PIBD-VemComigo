import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mymm',
      password: 'Postgres802097',
      database: 'vemcomigodb',
      autoLoadEntities: true,
      synchronize: false, // Defina como 'true' para sincronizar automaticamente o schema.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
