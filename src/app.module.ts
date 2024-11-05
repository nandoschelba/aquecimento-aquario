import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperaturaController } from './temperatura/temperatura.controller';
import { ArduinoController } from './arduino/arduino.controller';

@Module({
  imports: [],
  controllers: [AppController, TemperaturaController, ArduinoController],
  providers: [AppService],
})
export class AppModule {}
