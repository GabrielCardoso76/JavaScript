import aluno from './aluno.js';

export class Principal {
    constructor(){
        this.nomeAluno = null;
        this.notasAluno = [];
    }

    #configurar(){
        let nome = document.getElementById('nome');
        let nota = document.getElementById('nota');
        let botaoAdicionar = document.getElementById('adicionarNotaBtn');

        if((nome instanceof HTMLInputElement) && (nota instanceof HTMLInputElement)){
            botaoAdicionar.addEventListener('click',() =>{
                this.adicionarConteudo();
            });
        }
    }
    #adcionarConteudo(){}
}