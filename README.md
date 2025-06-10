# 🏎️ GaragemX - API de Carros e Peças

API RESTful desenvolvida em Node.js para gerenciar carros e peças automotivas. Permite cadastrar, listar, atualizar e remover registros — **sem necessidade de banco de dados**. Os dados são armazenados temporariamente em memória.

---

## 📂 Repositório Oficial

🔗 GitHub: [https://github.com/Patrickghell/GarageX.git](https://github.com/Patrickghell/GarageX.git)

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon (opcional, para desenvolvimento)](https://www.npmjs.com/package/nodemon)

---

## 📁 Estrutura do Projeto

- `server.js`: Arquivo principal responsável por iniciar o servidor e configurar as rotas.
- `routes/`: Contém as rotas para carros e peças.
- `controllers/`: Lógica para manipulação dos dados.
- `models/`: Modelos das entidades `Carro` e `Peca`.
- `data/`: Armazenamento em memória (pode ser um arquivo JS com arrays).

---

## 🛠️ Como Executar a API Localmente

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) instalado
- npm (vem com o Node.js)

---

### 📌 Passo a Passo para Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Patrickghell/GarageX.git
   cd GarageX
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor:**

   ```bash
   node server.js
   ```

   Ou, se estiver usando o Nodemon para reinicialização automática durante o desenvolvimento:

   ```bash
   npx nodemon server.js
   ```

4. **Acesse a API via navegador ou ferramenta como Postman:**

   ```
   http://localhost:3000
   ```

---

## 🧪 Endpoints Exemplares

- `GET /carros` – Lista todos os carros
- `POST /carros` – Cadastra um novo carro
- `PUT /carros/:id` – Atualiza um carro existente
- `DELETE /carros/:id` – Remove um carro

- `GET /pecas` – Lista todas as peças
- `POST /pecas` – Cadastra uma nova peça
- `PUT /pecas/:id` – Atualiza uma peça existente
- `DELETE /pecas/:id` – Remove uma peça

---

GaragemX é sua solução rápida e eficiente para o gerenciamento de dados automotivos! 🚘
