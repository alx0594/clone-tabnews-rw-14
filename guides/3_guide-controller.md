# Guia de construção da aplicação clone-tabnews-rw

## Parte 4 - Controller.

A camada controller será quem realmente fará o controlle das requisições que chegam em nossa aplicação.
O módulo controller consegue identificar, por exemplo, se a requisição que está sendo envia para nossa aplicação está com o método HTTP incorreto, e ela mesma consegue lançar o response com o Método HTTP não permitido. Ela também é a camada que suporta qualquer lançamento de erro da nossa aplicação que ocorre após uma requisição, por exemplo, erros 500, 503, 400, 404 etc.

Abaixo vemos a primeira versão do nosso módulo Controller:

```javascript
import { MethodNotAllowedError, InternalServerError } from "infra/error.js";

function onNoMatchHandler(request, response) {
  const publicObjectError = new MethodNotAllowedError();
  response.status(publicObjectError.statusCode).json(publicObjectError);
}

function onErrorHandler(error, request, response) {
  const publicObjectError = new InternalServerError({
    cause: error,
  });
  response.status(publicObjectError.statusCode).json(publicObjectError);
}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
```

**onNoMatchHandler:** Esta function irá capturar e lançar exceções de métodos HTTP não permitidos, por exemplo, um `POST` onde só é aceito `GET`  
**onErrorHandler:** Esta function irá tratar e lançar todoas execções do sistema. Ela irá verificar o `instanceof` do `error` e lançara um erro customizado que condiz exceção
