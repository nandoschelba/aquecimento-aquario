import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperaturaService {
  private temperaturaAtual: number | null = null;
  private minTemperatura: number = 0;
  private maxTemperatura: number = 100;

  // Retorna a temperatura atual
  getTemperaturaAtual() {
    return { temperatura: this.temperaturaAtual };
  }

  // Atualiza a temperatura atual
  updateTemperaturaAtual(temperatura: number) {
    this.temperaturaAtual = temperatura;
    return { message: 'Temperatura atualizada', temperatura: this.temperaturaAtual };
  }

  // Retorna os parâmetros de temperatura máxima e mínima configurados
  getTemperaturaSettings() {
    return {
      minTemperatura: this.minTemperatura,
      maxTemperatura: this.maxTemperatura,
    };
  }

  // Atualiza os parâmetros de temperatura máxima e mínima
  updateTemperaturaSettings(minTemperatura: number, maxTemperatura: number) {
    this.minTemperatura = minTemperatura;
    this.maxTemperatura = maxTemperatura;
    return {
      message: 'Temperatura settings updated',
      minTemperatura: this.minTemperatura,
      maxTemperatura: this.maxTemperatura,
    };
  }
}