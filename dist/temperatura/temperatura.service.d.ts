export declare class TemperaturaService {
    private temperaturaAtual;
    private minTemperatura;
    private maxTemperatura;
    getTemperaturaAtual(): {
        temperatura: number;
    };
    updateTemperaturaAtual(temperatura: number): {
        message: string;
        temperatura: number;
    };
    getTemperaturaSettings(): {
        message: string;
        minTemperatura: number;
        maxTemperatura: number;
    };
    updateTemperaturaSettings(minTemperatura: number, maxTemperatura: number): {
        message: string;
        minTemperatura: number;
        maxTemperatura: number;
    };
}
