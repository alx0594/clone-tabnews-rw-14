# Guia de construção da aplicação clone-tabnews-rw

## Parte 4 - error.

O módulo `infra/error.js` é onde criamos nossas classes de erros customizados. Usamos o catch para catputrar as execções lançadas pelo sistema e tratamos para que o erro seja lançado de forma customizada, com mensagens e instruções claras para os usuários.

Então, segue algumas das classes da camada error:

**Classe que trata erros de métodos HTTP não permitido:**

```javascript
export class MethodNotAllowedError extends Error {
  constructor() {
    super("O método HTTP utilizado na requisição não é permitido.");
    this.name = "MethodNotAllowedError";
    this.action = "Utilizar o método HTTP correto.";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
```

**Classe que trata todos os tipos de erros internos do servidor:**

```javascript
export class InternalServerError extends Error {
  constructor({ message, cause, action }) {
    super(message || "Um erro interno aconteceu.", {
      cause: cause,
    });
    this.name = "InternalServerError";
    this.action = action || "Contatar o suporte.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
```
