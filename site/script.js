fetch('http://localhost:3000/api/automoveis')
  .then(response => response.json())
  .then(dados => {
    const container = document.getElementById('categoria-container');

    Object.keys(dados).forEach(categoria => {
      const section = document.createElement('section');
      const titulo = document.createElement('h2');
      titulo.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
      section.appendChild(titulo);

      const ul = document.createElement('ul');
      ul.classList.add('categoria-list');

      dados[categoria].forEach(carro => {
        const li = document.createElement('li');
        li.classList.add('item-card');

        li.innerHTML = `
          <div>
            <h3 class="item-titulo">${carro.nome}</h3>
            <img src="${carro.imagem}" alt="${carro.nome}" class="item-imagem">
            <p class="item-descricao">${carro.descricao}</p>
          </div>
        `;

        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar automóveis:", error);
  });
