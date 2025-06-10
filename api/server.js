const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());

// Servir arquivos estáticos da pasta site (index.html, css, js e img)
app.use(express.static(path.join(__dirname, '../site')));

const dados = {
  "Anos 2000": [
    {
      nome: "Honda Civic 2006",
      imagem: "http://localhost:3000/img/honda2006.png",
      descricao: "Sedã confiável e econômico com bom desempenho urbano."
    },
    {
      nome: "Volkswagen Gol 2002",
      imagem: "http://localhost:3000/img/gol2002.png",
      descricao: "Compacto popular, muito usado no Brasil nos anos 2000."
    }
  ],

  "SUVs": [
    {
      nome: "Toyota SW4",
      imagem: "http://localhost:3000/img/toyotasw4.png",
      descricao: "SUV robusto com ótimo desempenho off-road e motor potente."
    },
    {
      nome: "Jeep Compass",
      imagem: "http://localhost:3000/img/jeepcompass.png",
      descricao: "SUV moderno com excelente acabamento e tecnologias embarcadas."
    }
  ],

  "Esportivos": [
    {
      nome: "Chevrolet Camaro",
      imagem: "http://localhost:3000/img/camaro.png",
      descricao: "Muscle car icônico com motor V8 e design agressivo."
    },
    {
      nome: "Ford Mustang GT",
      imagem: "http://localhost:3000/img/mustanggt.png",
      descricao: "Clássico americano, conhecido por sua performance e estilo."
    }
  ],

  "Elétricos": [
    {
      nome: "Tesla Model 3",
      imagem: "http://localhost:3000/img/tesla.png",
      descricao: "Sedã elétrico com ótima autonomia e tecnologia avançada."
    },
    {
      nome: "BYD Dolphin",
      imagem: "http://localhost:3000/img/byd.png",
      descricao: "Compacto elétrico eficiente com ótimo custo-benefício."
    }
  ],

  "Clássicos": [
    {
      nome: "Volkswagen Fusca",
      imagem: "http://localhost:3000/img/fusca.png",
      descricao: "Ícone mundial da Volkswagen, amado por gerações."
    },
    {
      nome: "Chevrolet Opala",
      imagem: "http://localhost:3000/img/opala.png",
      descricao: "Sedã clássico brasileiro com motor potente e presença marcante."
    }
  ]
};

app.get('/api/automoveis', (req, res) => {
  res.json(dados);
});

app.listen(PORT, () => {
  console.log(`🚗 API de Automóveis rodando em http://localhost:${PORT}/api/automoveis`);
});
