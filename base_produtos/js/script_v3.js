let produtos = [
  { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
];

function buscar() {
    let containerBusca = document.createElement('div');
    let inputBusca = document.createElement('input');
    let botaoBusca = document.createElement('button');
    let titulo = document.createElement('h2');
    titulo.textContent = 'Produtos';
    
    inputBusca.type = 'text';
    inputBusca.placeholder = 'Buscar (ex: fone, branco, preto...)';
    inputBusca.id = 'inputBusca';
    
    botaoBusca.textContent = 'Pesquisar';
    botaoBusca.onclick = filtrarProdutos;
    
    containerBusca.appendChild(titulo);
    containerBusca.appendChild(inputBusca);
    containerBusca.appendChild(botaoBusca);
    
    document.body.insertBefore(containerBusca, document.body.firstChild);
}

function filtrarProdutos() {
    let termoT = document.getElementById('inputBusca')
    let containers = document.querySelectorAll('.produto-container');
    
    if(termoT instanceof HTMLInputElement){
        let termo = termoT.value.toLowerCase();
    
    if (!termo) {
        containers.forEach(container => container.style.display = 'block');
        return;
    }
    
    containers.forEach(container => {
        let diretorio = container.getAttribute('data-diretorio');
        let descricao = container.getAttribute('data-descricao').toLowerCase();
        
        if (diretorio.includes(termo) || descricao.includes(termo)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
    }
}

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if (containerPrincipal) {
    produtos.forEach((produto) => {
      let produtoContainer = document.createElement('div');
      produtoContainer.className = 'produto-container';
      produtoContainer.setAttribute('data-diretorio', produto.diretorio);
      produtoContainer.setAttribute('data-descricao', produto.textoDescritivo);

      let containerImagens = document.createElement('div');
      containerImagens.className = 'container';

      produto.imagens.forEach((imagemNome) => {
        let imagem = document.createElement('img');
        imagem.src = `img/${produto.diretorio}/${imagemNome}`;
        imagem.alt = produto.nome;
        containerImagens.appendChild(imagem);
      });

      produtoContainer.appendChild(containerImagens);
      containerPrincipal.appendChild(produtoContainer);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
    buscar();
    inicializarProdutos();
});