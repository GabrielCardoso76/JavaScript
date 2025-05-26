let produtos = [
  { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
];

function buscar() {
    let containerBusca = document.createElement('div');
    let inputBusca = document.createElement('input');
    let botaoBusca = document.createElement('button');
    
    inputBusca.type = 'text';
    inputBusca.placeholder = 'Digite o diretório (ex: fone, mouse...)';
    inputBusca.id = 'inputBusca';
    
    botaoBusca.textContent = 'Pesquisar';
    botaoBusca.onclick = filtrarProdutos;
    
    containerBusca.appendChild(inputBusca);
    containerBusca.appendChild(botaoBusca);
    
    document.body.insertBefore(containerBusca, document.body.firstChild);
}

function filtrarProdutos() {
    let termo = document.getElementById('inputBusca').value.toLowerCase();
    let containers = document.querySelectorAll('.container');
    
    if (!termo) {
        containers.forEach(container => {
            container.style.display = 'block';
        });
        return;
    }
    
    containers.forEach(container => {
        let produtoDiv = container.closest('.produto-container');
        let diretorioProduto = produtoDiv.getAttribute('data-diretorio');
        
        if (diretorioProduto === termo) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if (containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto) => {
      let produtoContainer = document.createElement('div');
      produtoContainer.className = 'produto-container';
      produtoContainer.setAttribute('data-diretorio', produto.diretorio);

      let containerProduto = document.createElement('div');
      containerProduto.classList.add('container');

      produto.imagens.forEach((imagemNome) => {
        let imagem = document.createElement('img');
        imagem.src = `img/${produto.diretorio}/${imagemNome}`;
        imagem.alt = produto.nome;
        containerProduto.appendChild(imagem);
      });

      produtoContainer.appendChild(containerProduto);
      containerPrincipal.appendChild(produtoContainer);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
    buscar();
    inicializarProdutos();
});