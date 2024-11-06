import { TemperaturaService } from './temperatura.service';
export declare class TemperaturaController {
    private readonly temperaturaService;
    constructor(temperaturaService: TemperaturaService);
    getTemperaturaAtual(): {
        temperatura: number;
    };
    updateTemperaturaAtual(temperatura: number): {
        message: string;
        temperatura: number;
    };
    getTemperatureSettings(): {
        minTemperatura: number;
        maxTemperatura: number;
    };
    updateTemperatureSettings(minTemperatura: number, maxTemperatura: number): {
        message: string;
        minTemperatura: number;
        maxTemperatura: number;
    };
}
