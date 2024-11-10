import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';

async function bootstrap() {
  // Cria uma instância do Express
  const server = express();

  // Adapta o Express para ser usado com o NestJS
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();

  // Inicializa a aplicação NestJS
  await app.init();

  // Cria um servidor HTTP/1.1 usando Node.js
  const httpServer = http.createServer(server);

  // Define a porta para o servidor
  const PORT = process.env.PORT || 3000;

  // Inicia o servidor
  httpServer.listen(PORT, () => {
    console.log(`Servidor rodando em HTTP/1.1 na porta ${PORT}`);
  });
}

bootstrap();