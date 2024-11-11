import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperaturaService {
  private temperaturaAtual: number | null = null;
  private minTemperatura: number = 23.0;
  private maxTemperatura: number = 24.0;

  // Retorna a temperatura atual
  getTemperaturaAtual() {
    return { temperatura: this.temperaturaAtual };
  }

  // Atualiza a temperatura atual
  updateTemperaturaAtual(temperatura: number) {
    console.log("temperatura recebida: ", temperatura)
    this.temperaturaAtual = temperatura;
    return { message: 'Temperatura atualizada', temperatura: this.temperaturaAtual };
  }

  // Retorna os parâmetros de temperatura máxima e mínima configurados
  getTemperaturaSettings() {
    console.log("getSettings chamado: "), {
      minTemperatura: this.minTemperatura,
      maxTemperatura: this.maxTemperatura,
    }
    return {
      message: `Temperatura máxima: ${this.maxTemperatura} e minima: ${this.minTemperatura}`,
      minTemperatura: this.minTemperatura,
      maxTemperatura: this.maxTemperatura,
    };
  }

  // Atualiza os parâmetros de temperatura máxima e mínima
  updateTemperaturaSettings(minTemperatura: number, maxTemperatura: number) {
    console.log(`Temperatura máxima: ${maxTemperatura} e minima: ${minTemperatura} atualizadas`)
    this.minTemperatura = minTemperatura;
    this.maxTemperatura = maxTemperatura;
    return {
      message: 'Temperatura settings atualizado',
      minTemperatura: this.minTemperatura,
      maxTemperatura: this.maxTemperatura,
    };
  }
}