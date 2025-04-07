export default class Produto{
    #nome;
    #quantidade;
    #preco;
 
    constructor(nome, quantidade, preco){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = preco;
    }
    get nome(){
       return this.#nome;
    }
    get quantidade(){
        return this.#quantidade;
     }
     get preco(){
        return this.#preco;
     }

   valorTotal(quantidade, preco){
    //return (this.#quantidade * this.#preco).toFixed(2);
    return (quantidade * preco).toFixed(2);
   }

    toString(){
        return `Nome: ${this.#nome}, Quantidade: ${this.#quantidade}, 
        Preço Unitário: R$ ${this.#preco}, Valor Total: R$ ${this.valorTotal(this.#quantidade,this.#preco)}`;
    }
}