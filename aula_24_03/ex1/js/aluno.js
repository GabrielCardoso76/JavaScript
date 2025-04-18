export default class aluno {
    #nome;
    #notas = [];

    constructor(nome, notas = []){
        this.#nome = nome;
        this.#notas = notas;
    }
    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }
    get notas(){
        return this.#notas;
    }
    set notas(notas){
        if(this.#validarNotas(notas) === true){
            this.#notas = notas;
        }
    }
    calcularMedia(){
        if(this.#notas.length > 0){
        
        


        let somaNotas = this.#notas.reduce((acumulador, notaAtual) =>{
            return acumulador + notaAtual;
        }, 0);
        let resultado = somaNotas / this.#notas.length;

        return resultado.toFixed(2);
        }else{
            alert('Divisão por Zero não é permitida !');
            return 0;
        }
    }
    #validarNotas(notas){
        let notasValidas = notas.every((nota) =>{
            return nota >= 0 && nota <= 10;
        });
        if(notasValidas === false){
            alert("As notas devem estar entre 0 e 10");
        }
        return true;
    }

    toString(){
        return `Aluno: ${this.#nome} Media: ${this.#notas.join(', ')}`
    }

}