import Produto from "./Produto";

let produto;
let valorTotal = [];

//adicionarProduto(nomeInput,quantidadeProduto,precoProduto){
//    let quantidade = Number(quantidadeProduto.value);
//    let preco = Number(precoProduto.value);
    

//    if(!isNaN(quantidade) && (quantidade > 1) && (quantidade <= 500)&& (!isNaN(preco) && (preco > 0) && (preco <= 5000))){
//        if(!produto){
//            alert("sla ainda");
//            return;
//        }
//        
//    }
//}

function configurar() {
    let nomeInput = document.getElementById('nomeProduto');
    let quantidadeProduto = document.getElementById('quantidadeProduto');
    let precoProduto = document.getElementById('precoProduto');
    let adicionarProduto = document.getElementById('adicionarProdutos');
    let atualizarProduto = document.getElementById('atualizarProduto');
    let calcularValorEstoque = document.getElementById('calcularValorEstoque');

    if((nomeInput instanceof HTMLInputElement)&&(quantidadeProduto instanceof HTMLInputElement)&&(precoProduto instanceof HTMLInputElement)&&(adicionarProduto instanceof HTMLButtonElement)&&(atualizarProduto instanceof HTMLButtonElement)&&(calcularValorEstoque instanceof HTMLButtonElement)){
        adicionarProduto.addEventListener('click', () =>{
            adicionarProduto(nomeInput,quantidadeProduto,precoProduto);
        });

        atualizarProduto.addEventListener('click', () =>{
            //
        });

        calcularValorEstoque.addEventListener('click', () =>{
            //
        });
    }


 }


document.addEventListener('DOMContentLoaded', configurar);