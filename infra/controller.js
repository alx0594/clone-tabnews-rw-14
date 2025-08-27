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
