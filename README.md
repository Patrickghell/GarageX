# 🏎️ GaragemX - API de Carros e Peças

API RESTful desenvolvida em ASP.NET Core para gerenciar carros e peças de automóveis. Permite cadastrar, listar, atualizar e remover carros e peças — **sem necessidade de banco de dados**. Os dados são armazenados temporariamente em memória.

---

## 📂 Repositório Oficial

🔗 GitHub: [https://github.com/Patrickghell/GarageX.git](https://github.com/Patrickghell/GarageX.git)

---

## 🚀 Tecnologias Utilizadas

- [.NET 6 ou superior](https://dotnet.microsoft.com/)
- ASP.NET Core Web API
- Swagger (documentação da API)

---

## 📁 Estrutura do Projeto

- `Controllers/CarController.cs`: Controlador principal com endpoints da API para gerenciamento de carros.
- `Controllers/PecaController.cs`: Controlador com endpoints da API para gerenciamento de peças.
- `Models/Carro.cs`: Modelo de dados da entidade `Carro`.
- `Models/Peca.cs`: Modelo de dados da entidade `Peca`.
- `Program.cs`: Arquivo de inicialização e configuração do app.

---

## 🛠️ Como Executar a API Localmente

### ✅ Pré-requisitos

- [.NET 6 SDK ou superior](https://dotnet.microsoft.com/en-us/download/dotnet)
- Um editor de código como Visual Studio, VS Code ou terminal com CLI do .NET

---

### 📌 Passo a Passo para Executar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Patrickghell/GarageX.git
   cd GarageX
   ```

2. **⬇️ Baixe a pasta node_modules no OneDrive:**

🔗 [Clique aqui para acessar a pasta node_modules](https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy85ZDJhMjc0YmVkMGYyMWUzL0VoZlBtdkczbjY1Qm5JNXZ2SGwzUTFrQkdMVzhqUVpWQk14ZnRaTWQyVkFRcGc%5FZT1oSWFtd2o&id=9D2A274BED0F21E3%21sf19acf179fb741ae9c8e6fbc79774359&cid=9D2A274BED0F21E3)

Faça o download e cole a pasta dentro do diretório raiz do projeto, ao lado dos arquivos `Program.cs`, `Controllers`, `Models`, etc.

---

3. **Restaure os pacotes do projeto:**

   ```bash
   dotnet restore
   ```

4. **Compile a aplicação:**

   ```bash
   dotnet build
   ```

5. **Execute a API:**

   ```bash
   dotnet run
   ```

6. **Abra o navegador e acesse a interface Swagger:**

   [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

Agora você tem uma API que pode gerenciar carros e peças automotivas. Use a interface Swagger para testar os endpoints e interagir com a API.
