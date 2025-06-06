import Produto from './Produto.js';
class GerenciadorDeProdutos {
  #produtos = [];
  //total = [];

  configurar() {
    let adicionarBtn = document.getElementById('adicionarBtn');
    let removerBtn = document.getElementById('removerBtn');
    let totalBtn = document.getElementById('totalBtn');

    //prettier-ignore
    if((adicionarBtn instanceof HTMLButtonElement) && (removerBtn instanceof HTMLButtonElement) && (totalBtn instanceof HTMLButtonElement)){
        adicionarBtn.addEventListener('click', this.adicionarProduto.bind(this));
        removerBtn.addEventListener('click', this.removerProduto.bind(this));
        totalBtn.addEventListener('click', this.valorTotal.bind(this))
    }
  }

  valorTotal(){
    let resultado = document.getElementById('resultado');

    if(resultado instanceof HTMLParagraphElement){
        let totalPedido = 0;

        this.#produtos.forEach(produto => {
            totalPedido += produto.quantidade * produto.preco;
        });

        let percentualDesconto = 0.10;
        let valorComAdicional = totalPedido * (1 + percentualDesconto); 

        resultado.innerHTML = `Valor Total do Pedido com 10%: R$ ${valorComAdicional.toFixed(2)}`;

        //resultado.innerHTML = `Valor Total do Pedido R$ ${totalPedido}`;
        //resultado.innerHTML = `Valor Total do Pedido R$ ${this.total.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)}`;
    }
  }

  adicionarProduto() {
    let nomeInput = document.getElementById('nome');
    let quantidadeInput = document.getElementById('quantidade');
    let precoInput = document.getElementById('preco');

    //prettier-ignore
    if((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement)
    && (precoInput instanceof HTMLInputElement)){
        let nome = nomeInput.value;
        let quantidade = parseInt(quantidadeInput.value);
        let preco = parseFloat(precoInput.value);

        if((!nome) || isNaN(quantidade) || isNaN(preco)){
            alert("Preencha os campos corretamente !")
            return
        }
        
        //busca o primeiro item no vetor que contém o nome procurado
        let produtoExistente = this.#produtos.find((produto) => produto.nome === nome);

        if(produtoExistente){
            //produtoExistente.quantidade = produtoExistente.quantidade + quantidade; 
            produtoExistente.quantidade += quantidade; 
        }else{
            //let novoProduto = new Produto(nome, quantidade, preco);
            //this.#produtos.push(novoProduto);  
            this.#produtos.push(new Produto(nome, quantidade, preco));
        }
        this.atualizar();
        this.limparConteudo();
    }
  }

  atualizar() {
    let estoqueLista = document.getElementById('estoqueLista');
    if (estoqueLista instanceof HTMLUListElement) {
      //estoqueLista.innerHTML = "";
      while (estoqueLista.firstChild) {
        estoqueLista.removeChild(estoqueLista.firstChild);
      }

      this.#produtos.forEach((produto) => {
        let li = document.createElement('li');
        li.textContent = produto.toString();
        estoqueLista.appendChild(li);
      });

      this.limparConteudo();
    }
  }

  limparConteudo() {
    let nomeInput = document.getElementById('nome');
    let quantidadeInput = document.getElementById('quantidade');
    let precoInput = document.getElementById('preco');

    //prettier-ignore
    if((nomeInput instanceof HTMLInputElement) && (quantidadeInput instanceof HTMLInputElement)
    && (precoInput instanceof HTMLInputElement)){
        nomeInput.value = '';
        quantidadeInput.value = '';
        precoInput.value = '';
    }
  }

  removerProduto() {
    let nomeInput = document.getElementById('nome');

    if (nomeInput instanceof HTMLInputElement) {
      let nome = nomeInput.value;

      if (nome === '') {
        alert('Informe o nome do produto para a remoção !');
      }
      let indice = this.#produtos.findIndex((produto) => produto.nome === nome);
      if (indice >= 0) {
        this.#produtos.splice(indice, 1);
        this.atualizar();
      } else {
        alert('Produto não encontrado !');
      }
      this.limparConteudo();
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  let gerenciadorDeProdutos = new GerenciadorDeProdutos();
  gerenciadorDeProdutos.configurar();
});
