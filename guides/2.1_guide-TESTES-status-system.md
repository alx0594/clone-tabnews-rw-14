# Guia de construção da aplicação clone-tabnews-rw

## Parte 2 - API Check System Status.

### Configurações Iniciais

1. Instalar e configurar **Jest** para os testes automatizados: `npm install jest`
2. Configurar **Jest** no **package.json:**

- `"test": "jest --runInBand"`,
- `"test:watch": "jest --watchAll --runInBand"`

### Criando Primeiro Teste

1. Criar pasta tests, dentro dela segregar testes uniários e teste de integração.

- `tests/unit` e `tests/integration/api/v1/status/get.test.js`

2. Verificando status do sistema

Montar a estrutura de testes para verificar o status do sistema é bem simples.

- Criar um describe, ressaltando o método HTTP utilizado bem como o endpoint que será chamado.
- Criar mais um describe, agora especificando se o usuário ao fazer essa chamada estará logado ou não.
- criar test especificando o que será realizado.

Nestes testes de integração é comum usarmos o fetch, um client nativo do próprio NodeJS.
Diante disso, feremos uma requisição para o nosso servidor de aplicação e verificaremos se o status retornando no response será 200.

Como estamos trabalhando com `TDD - Test Driven Development`, PRIMEIRO criamos o teste, depois implementamos o código que satisfaça o teste.

Com o primeiro teste criado, agora precisamos implementar o código que retorne status 200 na verificação do status corrente do sistema.

3. Criando API que satisfaça o teste que verifica o status do sistema: `http://localhost:3000/api/v1/status`

- Em pages, cria o mesmo endpoint que está sendo chamado: `pages/api/v1/status/index.js`

O index.js nada mais é que nosso módulo de controller de verificação do status. A requisição será recebida por ele, direcionada para o model, que fará a interação com o banco de dados e retornará os dados descrevendo a saúde dos serviços que contempla nossa aplicação, por exemplo, banco de dados postgres.

Existe algumas maneiras de implementar o controller, o modelo abaixo, por exemplo, já consegue receber e responder as requisições perfeitamente.

```javascript
export default function status(request, response) {
  return response.status(200).json({});
}
```

Entretanto, existe um modelo no qual criamos um roteador que identifica o método HTTP requisitado e direciona para seu respectivo fluxo, além disso, é capaz de tratar e lançar exceções de acordo a falha ocorrida. Então ficará assim:

```javascript
import { createRouter } from "next-connect";
import controller from "infra/controller.js";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

function getHandler(request, response) {
  return response.status(200).json({});
}
```
