# To-Do List

Este é um projeto de um programa de lista de tarefas (To-Do List) desenvolvido com React para o frontend e uma API em Node.js para o backend.

## Descrição do Projeto

To-Do List é uma programa web simples para gerenciar tarefas diárias. Você pode adicionar novas tarefas, editar tarefas existentes, excluir tarefas e marcar tarefas como concluídas. A aplicação permite também filtrar tarefas para facilitar a visualização.

## Funcionalidades

- **Adicionar novas tarefas**: Insira novas tarefas para organizar suas atividades diárias.
- **Editar tarefas**: Atualize as informações das tarefas já cadastradas.
- **Excluir tarefas**: Remova tarefas que não são mais necessárias.
- **Marcar tarefas como concluídas**: Indique quais tarefas já foram finalizadas.
- **Filtrar tarefas**: Filtre as tarefas por título para encontrar rapidamente o que você está procurando.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js.

## Como Acessar o Projeto

Para acessar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js instalado
- MongoDB em execução

### Passos para Configuração e Execução

1. **Clone o repositório:**

```bash
git clone https://github.com/rayssamroseno/ToDoList.git
cd ToDoList
```

2. **Instale as dependências do backend:**
   
```bash
cd backend
npm install
```

3. **Configure o banco de dados:**

```bash
  Certifique-se de que o MongoDB está em execução na porta padrão (27017) ou configure a URL MongoDB no arquivo .env
  na raiz no diretório backend.
```

4. **Inicie o backend:**

```bash
cd ../backend
node server.js
```

5. **Instale as dependências do frontend:**

```bash
cd ../frontend
npm install
```

6. **Inicie o frontend**

```bash
npm start
```
A aplicação estará disponível em http://localhost:3000.

## Estrutura do Projeto

```bash
.
├── backend
│   ├── node_modules
│   ├── todo-list-frontend
│   ├── server.js
│   └── ...
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   ├── index.css
│   │   └── ...
│   └── ...
└── README.md

```
Backend

- models: Contém os modelos Mongoose para o MongoDB.
- todo-list-fronted: Pasta com arquivos do frontend.
- server.js: Arquivo principal do servidor.

Frontend

- components: Contém os componentes React da aplicação.
- App.js: Componente principal da aplicação.
- index.css: Estilos globais da aplicação.

  ## SneakPeek (Breve visualização)

<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/rayssamroseno/ToDoList/main/assets/171452897/a83885da-849c-4f5f-9de7-640fe939f8ba">
</p>
