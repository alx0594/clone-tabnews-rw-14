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
