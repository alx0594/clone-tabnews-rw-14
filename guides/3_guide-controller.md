# Guia de construção da aplicação clone-tabnews-rw

## Parte 4 - Controller.

A camada controller será quem realmente fará o controlle das requisições que chegam em nossa aplicação.
O módulo controller consegue identificar, por exemplo, se a requisição que está sendo envia para nossa aplicação está com o método HTTP incorreto, e ela mesma consegue lançar o response com o Método HTTP não permitido. Ela também é a camada que porta qualquer lançamento de erro da nossa aplicação que ocorre após uma requisição, por exemplo, erros 500, 503, 400, 404 etc.

Abaixo vemos a primeira versão do nosso módulo Controller:

```javascript

```
