# Desafio Técnico QA

Automação de testes utilizando Cypress para validação de cenários Web e API.

## Tecnologias utilizadas
- Cypress
- JavaScript

---

## Estrutura do projeto

cypress/
 └── e2e/
     ├── web/
     │   └── blog-agi.cy.js
     └── api/
         └── dog-api.cy.js

---

## Testes Web

Foram automatizados cenários no blog do Agibank:

- Busca por termo válido
- Acesso a artigo a partir da busca
- Busca por termo inexistente

Arquivo responsável:
cypress/e2e/web/blog-agi.cy.js

---

## Testes de API

Foram realizados testes utilizando a Dog API:

- Listagem de todas as raças
- Listagem de imagens por raça
- Retorno de imagem aleatória

Arquivo responsável:
cypress/e2e/api/dog-api.cy.js

---

## Como executar o projeto

1. Instalar dependências:
npm install

2. Abrir o Cypress:
npx cypress open

3. Executar os testes pela interface:
- Selecionar E2E Testing
- Escolher o navegador (Chrome)
- Executar os arquivos:
  - blog-agi.cy.js
  - dog-api.cy.js

---

## Observações

Projeto desenvolvido como parte de desafio técnico para avaliação de conhecimentos em QA, contemplando automação de testes Web e API.