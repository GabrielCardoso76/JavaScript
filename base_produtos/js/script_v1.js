// prettier-ignore
let produto = [ // produtos
  { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
  { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto', imagens: ['01.jpg', '02.jpg', '03.jpg'] },
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