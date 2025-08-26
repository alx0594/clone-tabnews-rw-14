function onNoMatchHandler(request, response) {}

function onErrorHandler(error, request, response) {}

const controller = {
  errorHandlers: {
    onNoMatch: onNoMatchHandler,
    onError: onErrorHandler,
  },
};

export default controller;
