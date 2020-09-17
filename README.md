# Teste front-end 3LM (Keeployee)
Eu recentemente participei de um processo de seleção para uma vaga de **front-end developer**, esse foi o teste que eles passaram. Gostei bastante pois pude experimentar algumas coisas novas como [Typescript](https://www.typescriptlang.org/) no React, fazer um Back-end (sim eu sei que era de front-end, mas o back seria um bônus) e no back, pude experimentar o [KnexJS](http://knexjs.org/) que facilitou bastante o desenvolvimento.

![Preview](https://github.com/sammarxz/test-3lm/blob/master/preview.png?raw=true)

## Sobre o Teste

### Instruções
* Fique à vontade para usar bibliotecas/componentes externos
* Utilize boas práticas de programação
* Documentar como rodar o projeto no readme.md do git/bitbucket

### Requisitos
* O sistema deverá ser desenvolvido utilizando React.js
* Você deve criar um CRUD que permita cadastrar as seguintes informações:
  * Funcionário: Nome, sobrenome, cargo, data de nascimento, salário
  * Cargo: Descrição.
* Salvar as informações em memória (Redux é um diferencial)

### Opcionais (pontos extras)
* Utilização de Typescript
* Desenvolver um backend (php ou node.js)
* Utilizar bando de dados para armazenar os dados (relacional ou não)

## Como utilizar

##### Clonar o projeto e instalar dependências
```
$ git clone git@github.com:sammarxz/test-3lm.git
$ cd test-3lm
$ cd backend && npm install && cd .. && cd frontend && npm install
```

##### Criar e popular banco de dados
```
$ cd backend
$ npm run knex:migrate
$ npm run knex:seed
```

##### Começar o servidor back-end
```
$ npm run dev
```

##### Começar o servidor front-end
```
$ cd frontend
$ npm start
```

## Rotas
* `/employees` - GET, POST
* `/employees/:id` - GET, POST, PUT, DELETE
* `/roles` - GET, POST
* `/roles/:id` - GET, POST, PUT, DELETE
