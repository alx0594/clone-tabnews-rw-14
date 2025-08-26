# Guia de construção da aplicação clone-tabnews-rw

## Parte 1 - Iniciação e configuração do projeto.

1. Criar repositório no GitHub: `gh repo create`
2. Iniciar projeto npm: `npm init -y`
3. Instalar dependências do NextJS e React: `npm install next react react-dom`
4. Configurar Next package.json: `"dev": "next dev"`

### Página simples de Bem-vindo

Criar pasta `pages` e dentro dela `index.js`

- Dentro de `index.js` deverá conter uma function que retorne um código HTML:

```javascript
export default function Home(request, response) {
  return (
    <>
      <div>
        <h1>Bem-vindo!!!</h1>
      </div>
    </>
  );
}
```
