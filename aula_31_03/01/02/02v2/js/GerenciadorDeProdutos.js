import Produto from "../../js/Produto.js";

class GerenciadorDeProdutos{
    #produto = [];

    adicionar(){
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        if((nomeInput instanceof HTMLInputElement)&&(quantidadeInput instanceof HTMLInputElement)&&(precoInput instanceof HTMLInputElement)){
            let nome = nomeInput.value;
            let quantidade = parseInt(quantidadeInput.value);
            let preco = parseFloat(precoInput.value);

            if(!nome || isNaN(quantidade) || isNaN(preco)){
                alert("Preencha todos os campos.")
            }

            let produtoExistente = this.#produto.find((produto) => produto.nome === nome);
            
            if(produtoExistente){
                produtoExistente.quantidade += quantidade;
            }else{
                this.#produto.push(new Produto(nome, quantidade, preco));
            }
        }
    }
    remover(){
        let nomeInput = document.getElementById('nome');

        if(nomeInput instanceof HTMLInputElement){
            let nome = nomeInput.value;

            if(!nome){
                alert("Informe um nome do produto o qual deseja remover !")
                return;
            }
            let indice = this.#produto.findIndex((produto) => produto.nome === nome);
            if(indice > 0){
                this.#produto.splice(indice,1);
                this.atualizarLista();
            }else{
                alert("Produto não encontrado")
            }
            this.atualizarLista();
            this.limparCampos();
        }   
    }


    atualizarLista(){
        let estoqueLista = document.getElementById('estoqueLista');

        if(estoqueLista instanceof HTMLUListElement){
            while(estoqueLista.firstChild){
                estoqueLista.removeChild(estoqueLista.firstChild);
            }
            this.#produto.forEach((protudo) =>{
                let li = document.createElement('li');
                li.textContent = protudo.toString();
                estoqueLista.appendChild(li);
            });
        }
    }
    limparCampos(){
        let nomeInput = document.getElementById('nome');
        let quantidadeInput = document.getElementById('quantidade');
        let precoInput = document.getElementById('preco');

        if(nomeInput instanceof HTMLElement && quantidadeInput instanceof HTMLElement && ){
            //terminar
        }
    }


    configurar(){
        let adicionarBtn = document.getElementById('adicionarBtn');
        let removerBtn = document.getElementById('removerBtn');

        if((adicionarBtn instanceof HTMLButtonElement)&&(removerBtn instanceof HTMLButtonElement)){
            adicionarBtn.addEventListener('click', this.adicionar);
            removerBtn.addEventListener('click',this.remover)
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GerenciadorDeProdutos;
})