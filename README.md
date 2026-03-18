# 🌱 FeeAgro Backend

![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-4da765)
![License](https://img.shields.io/badge/license-Uso%20acad%C3%AAmico%20%26%20portf%C3%B3lio-green)

API do sistema **FeeAgro**, desenvolvida para simular o backend de uma plataforma fintech/agro, responsável por gerenciar dados financeiros, transações e operações integradas ao frontend.

---

## 📌 Sobre o projeto

O FeeAgro Backend é uma aplicação server-side construída com foco em organização modular, clareza nas regras de negócio e preparação para integração com a interface web. A API foi planejada para centralizar operações e dados da plataforma, oferecendo uma base consistente para evolução do sistema.

Atualmente, a aplicação contempla:

- Estrutura de API REST
- Módulo de transações
- Módulo de operações
- Organização em camadas
- Integração preparada para consumo pelo frontend
- Base pronta para expansão com autenticação e persistência de dados

---

## 🛠 Tecnologias utilizadas

- **Node.js** para execução do ambiente backend
- **TypeScript** para tipagem estática e maior segurança no desenvolvimento
- **Express** para criação da API REST
- **Prisma ORM** para modelagem e acesso ao banco de dados
- **SQLite** como banco de dados relacional leve para desenvolvimento e persistência local
- **JWT** para autenticação baseada em token
- **Bcrypt** para hash de senhas
- **CORS** para controle de acesso entre frontend e backend
- **Dotenv** para gerenciamento de variáveis de ambiente

---

## 📁 Estrutura do projeto

> Estrutura em evolução conforme o crescimento da aplicação.

---

## ✅ Requisitos

Antes de executar o projeto, tenha instalado:

- Node.js 18 ou superior
- npm, yarn, pnpm ou bun

---

## 🚀 Como instalar

Clone o repositório e acesse a pasta do projeto:

```
git clone https://github.com/werbertviana/feeagro-backend
```
```
cd feeagro-backend
```
Instale as dependências:
```
npm install
```

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias. Exemplo:

```env
PORT=3001
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta"
```

---

## 🗄️ Banco de dados

O projeto utiliza **SQLite** como banco de dados local, com integração via **Prisma ORM**.

Após configurar o arquivo `.env`, execute o comando abaixo para aplicar as migrations e preparar o banco de dados:

```
npx prisma migrate dev
```
Se necessário, gere também o client do Prisma com:
```
npx prisma generate
```
---

## ▶️ Como executar em ambiente de desenvolvimento

```
npm run dev
```
Depois, a API poderá ser acessada em:
```
http://localhost:3001
```
---

## ✨ Funcionalidades implementadas
💸 Transações

- Estrutura para listagem de transações
- Separação entre entradas e saídas
- Dados preparados para consumo no frontend
- Organização pensada para filtros e paginação futura

🔄 Operações 

- Base para criação de novas operações
- Estrutura preparada para transferências
- Regras de negócio centralizadas no backend

🧩 Arquitetura

- Organização por módulos
- Separação entre rotas, controllers, services e repositories
- Estrutura escalável para novas funcionalidades

🔌 Integração

- API preparada para comunicação com o frontend FeeAgro
- Padronização de respostas para facilitar consumo no cliente

---

## 📐 Padrões adotados

- Arquitetura em camadas
- Tipagem com TypeScript
- Separação de responsabilidades
- Uso de ORM para acesso a dados
- Organização modular
- Estrutura voltada para escalabilidade e manutenção

---

## 📡 Rotas da API
As rotas estão em evolução conforme o desenvolvimento do projeto.

Exemplos de rotas implementadas:

- /transactions
- /transactions/summary

---

## 🔮 Melhorias futuras

- Expansão da estrutura de dados e relacionamentos
- Autenticação e autorização com JWT
- Validação robusta de payloads
- Paginação e filtros avançados
- Documentação da API com Swagger
- Testes unitários e de integração
- Logs e tratamento global de erros
  
---

## 👨‍💻 Autor

Werbert Viana

Desenvolvedor focado em aplicações mobile utilizando React Native, com interesse em tecnologia aplicada à educação e experiências digitais interativas.

🔗 GitHub:
https://github.com/werbertviana

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo, portfólio e desafio prático.
