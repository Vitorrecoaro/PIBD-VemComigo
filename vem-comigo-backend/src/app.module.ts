import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'PIBD',
      password: 'PIBD',
      database: 'VemComigoDB',
      autoLoadEntities: true,
      synchronize: false, // Defina como 'true' para sincronizar automaticamente o schema.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
