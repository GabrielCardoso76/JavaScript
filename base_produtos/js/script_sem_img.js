// prettier-ignore
let produtos = [ // produtos
  { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco' },
  { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto' },
  { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto' },
  { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto' },
];

function inicializarProdutos() {
  let containerPrincipal = document.getElementById('produtos');

  if (containerPrincipal instanceof HTMLDivElement) {
    produtos.forEach((produto) => {
      let containerProduto = document.createElement('div');

      if (!(containerProduto instanceof HTMLDivElement)) return;

      containerProduto.classList.add('container');

      produto.imagens.forEach((imagemNome) => {
        let imagem = document.createElement('img');

        if (imagem instanceof HTMLImageElement) {
          imagem.src = `./img/${produto.diretorio}/${imagemNome}`;
          imagem.alt = produto.nome;
          containerProduto.appendChild(imagem);
        }
      });

      containerPrincipal.appendChild(containerProduto);
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializarProdutos);