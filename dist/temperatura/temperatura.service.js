"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperaturaService = void 0;
const common_1 = require("@nestjs/common");
let TemperaturaService = class TemperaturaService {
    constructor() {
        this.temperaturaAtual = null;
        this.minTemperatura = 23.0;
        this.maxTemperatura = 24.0;
    }
    getTemperaturaAtual() {
        return { temperatura: this.temperaturaAtual };
    }
    updateTemperaturaAtual(temperatura) {
        this.temperaturaAtual = temperatura;
        return { message: 'Temperatura atualizada', temperatura: this.temperaturaAtual };
    }
    getTemperaturaSettings() {
        return {
            minTemperatura: this.minTemperatura,
            maxTemperatura: this.maxTemperatura,
        };
    }
    updateTemperaturaSettings(minTemperatura, maxTemperatura) {
        this.minTemperatura = minTemperatura;
        this.maxTemperatura = maxTemperatura;
        return {
            message: 'Temperatura settings updated',
            minTemperatura: this.minTemperatura,
            maxTemperatura: this.maxTemperatura,
        };
    }
};
exports.TemperaturaService = TemperaturaService;
exports.TemperaturaService = TemperaturaService = __decorate([
    (0, common_1.Injectable)()
], TemperaturaService);
//# sourceMappingURL=temperatura.service.js.map