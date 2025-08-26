# Guia de construção da aplicação clone-tabnews-rw

## Parte 0 - Configurações Gerais da Aplicação.

O Javiscript, bem como o nodeJS não entende muito bem a estrutura de pastas para importação dos módulos.
Dessa forma, precisamos ajudá-lo através da configuração do arquivo `jsconfig.json`, onde iremos especificar onde ele deve começar o import.
Simples assim:

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```
