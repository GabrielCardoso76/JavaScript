export default class{
    #nome;
    #preco;
    #quantidade;

    constructor(nome, quantidade, precoUnitario) {
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#preco = precoUnitario;
    }
    valorTotal(){
        return (this.#preco * this.#quantidade).toFixed(2);
    }
    toString(){
        return `${this.#nome}: Quantidade: ${this.#quantidade},
        Preço Unitário R$ ${this.#preco}, Valor Total R$ ${this.valorTotal}`;
    }
}