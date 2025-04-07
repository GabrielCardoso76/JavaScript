export default class{
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
    set quantidade(quantidade){
        if(this.#validarQuantidade(quantidade)){
            this.#quantidade = quantidade;
        }
    }
    set preco(preco){
        if(this.#validarPreco(preco)){
            this.#preco = preco
        }
    }
    #validarQuantidade(quantidade){
        if(quantidade > 0 && quantidade <= 500){
            return true;
        }
        alert('quantidade deve estar entre 1 e 500.')
        return false;
    }
    #validarPreco(preco){
        if(preco > 0.50 && preco <= 500){
            return true;
        }
        alert('quantidade deve estar entre 0.50 e 5000.')
        return false;
    }

    
}