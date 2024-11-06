import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperaturaController } from './temperatura/temperatura.controller';
import { TemperaturaService } from './temperatura/temperatura.service';

@Module({
  imports: [],
  controllers: [AppController, TemperaturaController],
  providers: [AppService, TemperaturaService],
})
export class AppModule {}
