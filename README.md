<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/douglasbelarmino/thebot?color=%235965e0">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/douglasbelarmino/thebot?color=%235965e0">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/douglasbelarmino/thebot?color=%235965e0">
  
  <a href="https://github.com/douglasbelarmino/thebot/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/douglasbelarmino/thebot?color=%235965e0">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%235965e0">
   
   <a href="https://github.com/douglasbelarmino/thebot/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/douglasbelarmino/thebot?color=%235965e0">
  </a>

  <a href="">
    <img alt="TheBot" src="https://img.shields.io/badge/feito%20por-Douglas-%235965e0">
  </a>
</p>

<h1 align="center">
</h1>

<h1 align="center">
    <img alt="TheBot" title="#TheBot" src="https://user-images.githubusercontent.com/36802445/123189693-aa191f00-d474-11eb-8927-52cdfb5cd6cf.png" />
    <img alt="TheBot" title="#TheBot" src="https://user-images.githubusercontent.com/36802445/123190931-cfa72800-d476-11eb-8728-8fc42eb2ff78.png" />
</h1>

<h4 align="center"> 
	🚧  The Bot ♻️ Finalizado 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

♻️ The Bot - é uma aplicação de chatbot onde você interage com ele.

---

## ⚙️ Funcionalidades

- [x] Usuário tem possibilidade de buscar um, buscar todos, cadastrar, atualizar e apagar o bot
- [x] Usuário tem possibilidade de enviar mensagem, buscar por uma determinada mensagem e buscar todas as mensagens de uma determinada conversa.

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en) + NPM, [Yarn](https://yarnpkg.com/), [Docker](https://www.docker.com), [Docker Compose](https://docs.docker.com/compose/install) e [Insomnia](https://insomnia.rest) Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com)

---

## :information_source: Como Utilizar

A partir da sua linha de comando:

### Server

```bash
# Clone o repositório
$ git clone https://github.com/douglasbelarmino/thebot thebot

# Entre na pasta
$ cd thebot/server

# Instale as dependências
$ yarn

# Na raiz do pasta server, crie um novo arquivo chamado .env, copie o conteúdo do .env.example para dentro do .env e configure as variáveis de ambiente da seguinte forma:
MONGO_USERNAME=docker
MONGO_PASSWORD=docker
MONGO_DB=db_thebot

# Crie os containers do back-end e banco de dados
$ sudo docker-compose up -d

# Abra o programa insomnia e importe o arquivo 'Insomnia' disponível na pasta server. Logo em seguida, abra a request Bot/Store e execute a mesma. Se retornar o status code 201 é porque deu tudo certo.
```

### Web

```bash
# Clone repositório
$ git clone https://github.com/douglasbelarmino/thebot thebot

# Entre na pasta
$ cd thebot/web

# Instale dependências
$ yarn

# Na raiz do pasta web, crie um novo arquivo chamado .env, copie o conteúdo do .env.example para dentro do .env e configure a variável de ambiente da seguinte forma:
REACT_APP_API_URL=http://localhost:3333

# Execute aplicação
$ yarn start
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([Node.js](https://nodejs.org/en) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com)**
- **[Mongoose](https://mongoosejs.com)**
- **[TS Node Dev](https://github.com/wclr/ts-node-dev)**
- **[Cors](https://github.com/expressjs/cors)**
- **[dotenv](https://github.com/motdotla/dotenv)**
- **[uuid](https://github.com/uuidjs/uuid)**

> Veja o arquivo [package.json](https://github.com/douglasbelarmino/thebot/blob/main/server/package.json)

#### **Web** ([ReactJS](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://reactrouter.com/web/guides/quick-start)**
- **[Styled Components](https://styled-components.com)**
- **[Axios](https://github.com/axios/axios)**

> Veja o arquivo [package.json](https://github.com/douglasbelarmino/thebot/blob/main/web/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Insomnia: **[Insomnia](https://insomnia.rest/download)**
- Markdown: **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**

- Fontes: **[Poppins](https://fonts.google.com/specimen/Poppins)**

---

## 👨‍💻 Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://linkedin/in/douglas-belarmino"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/36802445?s=460&u=9af2af554d1947d09b9bf2e9cfb06d2f1ece22f7&v=4" width="100px;" alt=""/><br /><sub><b>Douglas Belarmino</b></sub></a></td>
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor

<img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/36802445?s=460&u=9af2af554d1947d09b9bf2e9cfb06d2f1ece22f7&v=4" width="100px;" alt=""/><br /><sub><b>Douglas Belarmino</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/douglasbelarmino/)](https://www.linkedin.com/in/douglas-belarmino/)
[![Twitter Badge](https://img.shields.io/badge/-Twitter-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/douglasbelarr)](https://twitter.com/douglasbelarr)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c71610?style=flat-square&logo=Gmail&logoColor=white&link=mailto:douglasbelarmino@gmail.com)](mailto:douglas.belarr@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](https://github.com/douglasbelarmino/thebot/blob/main/LICENSE).

Feito com ❤️ por Douglas Belarmino 👋🏽 [Entre em contato!](https://www.linkedin.com/in/douglas-belarmino)

---
